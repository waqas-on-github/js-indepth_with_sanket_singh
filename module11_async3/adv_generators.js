
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


 function* steps () {

     console.log("entring in steps ");
     const downloadedData = yield download("abc.com")
     console.log("download data is " , downloadedData);
     const fileWritten = yield writeFile(downloadedData)
     console.log("file written is " , fileWritten);
     const upladedResponce = yield uploadData(fileWritten)
     console.log("uploaded data is " , upladedResponce);
     return upladedResponce
}

const iter = steps()
iter.next()
iter.next()
