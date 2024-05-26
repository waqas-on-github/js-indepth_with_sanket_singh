import  * as fs   from "fs/promises"

const filePath = new URL("./index.html" , import.meta.url)

let content = await fs.readFile(filePath , {encoding :'utf-8'})
console.log(content);
const data = {
    name : "waqas" , 
    company : "my own" , 
    age : 28
}

for(const [key , value] of Object.entries(data)) {
    content = content.replace(`{${key}}` , value    )
}


 await fs.writeFile( filePath ,content)