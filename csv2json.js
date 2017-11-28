// csv2json - converts customer data from CSV format to JSON
// edX - Introduction to NodeJS - Module 1 assignment
// 27 Nov 2017 - Ewan T.
const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')
const csvFilePath = path.join(__dirname, 'data', 'customer-data.csv')
const jsonFilePath = path.join(__dirname, 'data', 'customer-data.json')

// Convert from CSV to JSON using the csvtojson package https://www.npmjs.com/package/csvtojson
let jsonBuffer = []
csv()
.fromFile(csvFilePath)
.on('header', (header) => {
    // Ensure we have a valid file by checking the headers
    const checkHeader = 'id,first_name,last_name,email,gender,ip_address,ssn,credit_card,bitcoin,street_address'
    if (header.join() != checkHeader) return console.error('Headers incorrect\n',checkHeader,'\n',header.join())
})
.on('json', (jsonObj) => {
    jsonBuffer.push(jsonObj) 
})
.on('done', (error) => {
    if (error) return console.error('Conversion failed with error: ', error)
    console.log('Converted ', jsonBuffer.length, 'records')
    // Make the json pretty as per spec in tutorial
    let prettyJson = JSON.stringify(jsonBuffer, null, 2)
    // Write the JSON to a file
    fs.writeFile(jsonFilePath, prettyJson, function (error) {
        if (error) return console.error(error)
        console.log('Json written to ', jsonFilePath)
    })
})
