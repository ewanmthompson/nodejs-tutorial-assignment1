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

# Evolution and Difficulties

In my first cut I added each record to a string buffer in the 'json' event. I added json delimiters to each record but had some difficulty getting the alignment identical to the example and had to play around with JSON.stringify to get it right. In the end this worked fine and produced the correct output but was a pretty inefficient solution. So I changed to storing the JSON objects in an array and stringified the complete array in the 'done' event. The final result was much more elegant with fewer lines of code.

Also in the first cut I used fs.readfile to check the csv headers for validation. I then discovered the csvtojson 'header' event and used this instead for validation.

My biggest challenge was figuring out how to use GitHub, my background is dotnet development so I have previously only used the MS source control tools.

# Testing

Firstly I visually checked the first two records of my output against the example records in the tutorial. I did this iteratively while developing my program. Once everything looked OK with the visual check I used a file comparison tool (BeyondCompare) to perform the same check to ensure I had not missed any differences in the visual check. I also divided the output file line count by the field count to ensure I was creating 1000 json records. Finally I downloaded customer-data-solution.json and used BeyondCompare to verify my output matched it exactly, it was all good. 

