


process.on('beforeExit', () => console.log('the process is going to finish'));
process.on('exit', () => console.log('the process has finished'));

process.on('uncaughtException', (error, origin) => console.log(`the process has finished ${error}`));
//process.on('uncaughtRejection', () => console.log('the process has finished'));
