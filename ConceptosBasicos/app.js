// console.log(process.argv);
// console.log(Number(process.argv[2])+Number(process.argv[3]));

const fs = require('fs');

fs.readFile('index.html', 'utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

