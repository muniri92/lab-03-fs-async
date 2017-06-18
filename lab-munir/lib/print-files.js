'use strict';

const fs = require('fs');

let printFiles = (paths, callback) => {
  paths.map( (path) => fs.readFile(path, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }));
};

printFiles(['./test1.txt', './test2.txt', './test3.txt']);
