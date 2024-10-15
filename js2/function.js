const getPromise=(name)=>{
    return new Promise((resolve,reject)=>{
        console.log(`${name} your promise is made`);
        //resolve()
        //reject()
       setTimeout(()=>{
        const error=false
        if(!error){
            resolve(`${name} your promise is resolved`)
        }
        else{
            reject(`Opps!${name} error happen`)
        }
       },3000)
    })
    
}
getPromise("siyam")
.then(res => console.log(res))
.catch(err => console.log(err))
