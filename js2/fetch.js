// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))

//  const showdata=async ()=>{
//     const result=fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(result);
//  }   pending....

const showdata=async ()=>{
    const result=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await result.json()
    console.log(data);
 }  
 showdata()  