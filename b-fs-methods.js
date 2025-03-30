const fs = require('fs/promises');
const {log} = require('console');

async function main(){

    // Get names of files and directories
    const files = await fs.readdir('./files');

    console.log(files);
    
    // Create directory

    try {
        await fs.mkdir('./files/second-dir');
    } catch (error) {
        console.log(error);
        
    }
    
}

main();