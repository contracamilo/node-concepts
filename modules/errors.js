const badfunction = () => 5 + z;

//sync 

try {
    badfunction()
} catch (error) {
    console.log('fail')
    console.error(error.message)
}
console.log('continue...')


//async

function newfunction() {
    setImmediate(() => {
        try {
            return5 + z
        } catch (error) {
            console.log('fail')
            console.error(error.message)
            console.log('continue...')
        }
    });
}
newfunction();