function asynch(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (error) {
            callback(error)
        }
    }, 100);
}

asynch((error, info) => {
    if(error){
        console.error(`ops something happened ${error}`);
        return false;
    }
})