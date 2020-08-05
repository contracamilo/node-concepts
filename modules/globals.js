//console.log(global);
//console.log(process);
console.log(__dirname);

/*
let i = 0;

let interval = setInterval(() => {
    if(i === 3){
        clearInterval(interval);
    }
    console.log('hi');
    i++;
}, 1000); */

setImmediate(() => {console.log('hola')})