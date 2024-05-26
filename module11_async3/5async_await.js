
function download (url) {
    return new Promise((resolve  ) => {
        setTimeout(() => {
           const data = "xyz"            
           const dnl =`started download data from ${data}  from url ${url}`
           resolve(dnl)
        }, 2000);
    })
}

function writeFile (data) {
    return new Promise((resolve  ) => {
        setTimeout(() => {
            const writtenData = `${data}.data`
            resolve(writtenData)
        }, 2000);
    })
}


function uploadData (writtenFileData) {

    return new Promise((resolve  ) => {
        setTimeout(() => {
            const writtenData = `${writtenFileData} uploded sucessfully`
            resolve(writtenData)
        }, 2000);
    })
}


async function steps () {

     console.log("entring in steps ");
     const downloadedData = await download("abc.com")
     console.log("download data is " , downloadedData);
     const fileWritten = await writeFile(downloadedData)
     console.log("file written is " , fileWritten);
     const upladedResponce = await uploadData(fileWritten)
     console.log("uploaded data is " , upladedResponce);
     return upladedResponce
}

    

steps()

