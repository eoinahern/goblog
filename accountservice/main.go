package main

import (
	"fmt"

	"github.com/eoinahern/goblog/accountservice/dbclient"
	"github.com/eoinahern/goblog/accountservice/service"
)

var appName = "accountservice"

func main() {

	fmt.Printf("Starting %v \n", appName)
	initializeBoltClient()
	service.StartWebServer("8080")

}

func initializeBoltClient() {

	service.DBClient = &dbclient.BoltClient{}
	service.DBClient.OpenBoltDb()
	service.DBClient.Seed()

}
