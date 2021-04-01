//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join("../blogfiles", 'Documents');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    var num=0;
    files.forEach(function (file) {
        
    var div = document.createElement("div");  
    div.document.createAttribute("class").value("card text-white pb-4"); 
    div.document.createAttribute("id").value("post" + num); 
    num++; 
    var p=document.createElement("p");
    p.createAttribute("class").value("card-text");
    document.getElementById("post" + num).appendChild(p.innerHTML(fs.readFileSync('file', utf8 + " ")));     // Append <p> to <div> with id="myDIV"

    });
});