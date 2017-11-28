# nodejs-tutorial-assignment1

This is the Module 1 tutorial for the edX Introduction to NodeJS course.

This project converts customer data from csv format to json.

# Usage

$ npm i csv2json
$ node csv2json

# Design

* Converts from CSV to JSON using the csvtojson package https://www.npmjs.com/package/csvtojson
* The 'header' event is used to check that the CSV file format is valid and has the expected columns.
* Converted records are stored in an array via the 'json' event.
* When all records have been converted ('done' event), JSON.stringify is used to join the JSON objects
in the array into a string. Stringify allows the Json to be formatted as per the example in the spec.
* The stringified json is then written to file using fs.writefile.

# Evolution

In my first cut I added each record to a string buffer in the 'json' event. This worked fine and produced the correct output but was a pretty inefficient solution. So I changed to storing the JSON objects in an array. The final result was much more elegant with fewer lines of code.

Also in the first cut I used fs.readfile to check the csv headers for validation. I then discovered the csvtojson 'header' event and used this instead.

# Testing

Comment on testing

