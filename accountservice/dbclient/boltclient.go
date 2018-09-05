package dbclient

import (
	"encoding/json"
	"fmt"
	"log"
	"strconv"

	"github.com/boltdb/bolt"
	"github.com/eoinahern/goblog/accountservice/model"
)

type IBoltClient interface {
	OpenBoltDb()
	QueryAccount(accountId string) (model.Account, error)
	Seed()
}

type BoltClient struct {
	boltDB *bolt.DB
}

//OpenBoltDb   open db
func (bc *BoltClient) OpenBoltDb() {
	var err error

	bc.boltDB, err = bolt.Open("accounts.db", 0600, nil)

	if err != nil {
		log.Fatal(err)
	}
}

//QueryAccount get account
func (bc *BoltClient) QueryAccount(accountId string) (model.Account, error) {
	// Allocate an empty Account instance we'll let json.Unmarhal populate for us in a bit.

	account := model.Account{}

	err := bc.boltDB.View(func(tx *bolt.Tx) error {

		// Read the bucket from the DB

		b := tx.Bucket([]byte("AccountBucket"))
		accountBytes := b.Get([]byte(accountId))

		if accountBytes == nil {
			return fmt.Errorf("No account found for " + accountId)
		}

		json.Unmarshal(accountBytes, &account)
		return nil

	})

	// If there were an error, return the error

	if err != nil {
		return model.Account{}, err
	}

	// Return the Account struct and nil as error.
	return account, nil
}

//Seed seed db
func (bc *BoltClient) Seed() {

	bc.initializeBucket()
	bc.seedAccounts()

}

func (bc *BoltClient) initializeBucket() {
	bc.boltDB.Update(func(tx *bolt.Tx) error {

		_, err := tx.CreateBucket([]byte("AccountBucket"))

		if err != nil {
			return fmt.Errorf("create bucket failed: %s", err)
		}

		return nil

	})

}

func (bc *BoltClient) seedAccounts() {

	total := 100
	for i := 0; i < total; i++ {

		key := strconv.Itoa(1000 + i)

		acc := model.Account{
			Id:   key,
			Name: "Person_" + strconv.Itoa(i),
		}

		jsonbytes, _ := json.Marshal(acc)

		bc.boltDB.Update(func(tx *bolt.Tx) error {
			b := tx.Bucket([]byte("AccountBucket"))
			err := b.Put([]byte(key), jsonbytes)
			return err
		})

	}

	fmt.Printf("Seeded %v fake accounts...\n", total)

}
