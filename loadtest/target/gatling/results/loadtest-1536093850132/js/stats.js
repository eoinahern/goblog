var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "0",
        "ko": "2000"
    },
    "minResponseTime": {
        "total": "21004",
        "ok": "-",
        "ko": "21004"
    },
    "maxResponseTime": {
        "total": "21081",
        "ok": "-",
        "ko": "21081"
    },
    "meanResponseTime": {
        "total": "21027",
        "ok": "-",
        "ko": "21027"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles1": {
        "total": "21026",
        "ok": "-",
        "ko": "21025"
    },
    "percentiles2": {
        "total": "21034",
        "ok": "-",
        "ko": "21034"
    },
    "percentiles3": {
        "total": "21045",
        "ok": "-",
        "ko": "21045"
    },
    "percentiles4": {
        "total": "21056",
        "ok": "-",
        "ko": "21056"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "37.514",
        "ok": "-",
        "ko": "37.514"
    }
},
contents: {
"req_getaccount-87c54": {
        type: "REQUEST",
        name: "GetAccount",
path: "GetAccount",
pathFormatted: "req_getaccount-87c54",
stats: {
    "name": "GetAccount",
    "numberOfRequests": {
        "total": "2000",
        "ok": "0",
        "ko": "2000"
    },
    "minResponseTime": {
        "total": "21004",
        "ok": "-",
        "ko": "21004"
    },
    "maxResponseTime": {
        "total": "21081",
        "ok": "-",
        "ko": "21081"
    },
    "meanResponseTime": {
        "total": "21027",
        "ok": "-",
        "ko": "21027"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles1": {
        "total": "21026",
        "ok": "-",
        "ko": "21026"
    },
    "percentiles2": {
        "total": "21034",
        "ok": "-",
        "ko": "21034"
    },
    "percentiles3": {
        "total": "21045",
        "ok": "-",
        "ko": "21045"
    },
    "percentiles4": {
        "total": "21056",
        "ok": "-",
        "ko": "21056"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "37.514",
        "ok": "-",
        "ko": "37.514"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
