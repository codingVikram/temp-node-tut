const {readFile, writeFile} = require('fs');
console.log('start')

// the above is destructre method of the below: ES6 syntax
// const fs = require('fs');
// fs.readFileSync()

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const first  = result;
    readFile('./content/second.txt', 'utf8',(err, result) => {
        if(err){
            console.log(err)
            return;
        }

        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=> {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task')        });
    })
})
console.log('starting next task')