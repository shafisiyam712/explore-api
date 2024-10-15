// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(err=> console.log(err))

//promise =>resolve/then reject/catch

const promise1=new Promise((resolve,reject)=>{
    console.log("promise is made");
    //resolve()
    //reject()
   setTimeout(()=>{
    const error=true
    if(!error){
        resolve("promise is resolved")
    }
    else{
        reject("Opps! error happen")
    }
   },5000)
})

// promise1
// .then(response=>{
//     console.log(response);
    
//     //console.log("this is response block");
// })
// .catch(error=>{
//     console.log(error);
    
//     //console.log("this is error catch block");
    
// })
// .finally(()=>{
//     console.log("finally block run");
    
// })

const getPromise=async ()=>{
  try{
    const response=await promise1
  console.log(response);
  }catch(err){
    console.log(err);
    
  }finally{
    console.log("finally block run");
    
  }
  
 }  
 getPromise()