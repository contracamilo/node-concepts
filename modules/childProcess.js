const { exec, spawn } = require('child_process');

let process = spawn('ls', ['-la']);

/*
exec('ls -la', (err, stdout, stderr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout)
}) 

exec('node modules/console.js', (err, stdout, stderr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout)
}) */

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (data) => console.log(data.toString()));

process.on('exit', () => console.log('the process has finished'));