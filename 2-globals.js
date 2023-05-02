// GLOBALS - NO WINDOW !!!

// __dirname - path to the current directory
// __filename - file name

// require  - function to use modules (CommonJS)
// module   - info abount current module (file)
// process  - info abount env  where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);
setInterval(() => {
    console.log('Hello World');
}, 1000)