//===============Fetch data from Text file using Promise and then 

// document.getElementById("btn").addEventListener("click",show);
// function show(){
//    const promiseObj = fetch('data.txt')
//    console.log(promiseObj);
//   promiseObj.then( (res) => { console.log(res); return res.text() })
//   .then((data) => {console.log(data)})
// }

//-----------------OR--------------------------

// document.getElementById("btn").addEventListener("click",show);
//  function show(){
//     fetch('data.txt')
//     .then((res) => {console.log(res); return res.text() })
//     .then((data) => {console.log(data)
//     })
//  }

//------------check in a code error is happening or not and here i am writting a code for error handling in frtch api if data is not there

// document.getElementById("btn").addEventListener("click",show);
//  function show(){
//     fetch('datka.txt')
//     .then((res) => {  if(!res.ok){
//         throw Error(res.statusText)
//     }  console.log(res); return res.text() })
//     .then((data) => {console.log(data) })
//     .catch((error) => {console.log(error) })
//  }  ============output= > error not found
//Note : fetch api only gets error when network error is happening

//================After fetching a data from text file print it on Web page
// document.getElementById("btn").addEventListener("click",show);
//  function show(){
//     fetch('data.txt')
//     .then((res) => {console.log(res); return res.text() })
//     .then((data) => {console.log(data)
//         document.getElementById('divData').innerText = data;
//     })
//  }

//Fetch Data from API using Async and Await
//document.getElementById("btn").addEventListener("click",show);
// async function show(){
//    const res = await fetch('data.txt');
//    const ans = await res.text();
//    console.log(ans);
// }

//How to use error handling in fetch api at the time of using async and await 

// document.getElementById("btn").addEventListener("click",show);
// async function show(){
//     try{
//         const res = await fetch('dateda.txt');
//         if(!res.ok){
//          throw Error(res.statusText);
//         }
//         const ans = await res.text();
//         console.log(ans);
//     } catch(error) {
//         console.log(error);
//     } 
// }

//================After fetching a data from text file How to print it on Web page
// document.getElementById("btn").addEventListener("click",show);
// async function show(){
//     try{
//         const res = await fetch('data.txt');
//         if(!res.ok){
//          throw Error(res.statusText);
//         }
//         const ans = await res.text();
//        document.getElementById('divData').textContent = ans;
//     } catch(error) {
//         console.log(error);
//     } 
// }


//======Fetch data from JSON file using promise 
// document.getElementById("btn").addEventListener("click",show);
//  function show(){
//     fetch('datas.json')
//     .then((res) => {  if(!res.ok){
//         throw Error(res.statusText)
//     }  console.log(res); return res.json() })//here only change a text() to json() because this time you have a json file not a text file
//     .then((data) => {console.log(data) })
//     .catch((error) => {console.log(error) })
//  }  

//================After fetching a data from text file print it on Web page
// document.getElementById("btn").addEventListener("click",show);
//  function show(){
//     fetch('datas.json')
//     .then((res) => {console.log(res); return res.json() })
//     .then((data) => {console.log(data.name+" "+data.roll)
//         document.getElementById('divData').innerText = data;
//     })
//  }

//======Fetch data from JSON file using async and await and print it on web page
// document.getElementById("btn").addEventListener("click",show);
// async function show(){
//     try{
//         const res = await fetch('datas.JSON');
//         if(!res.ok){
//          throw Error(res.statusText);
//         }
//         const ans = await res.json();
//         document.write(ans.name+" "+ans.roll);
//     } catch(error) {
//         console.log(error);
//     } 
// }

//=================Fetch Data from API using Using Promise and then ========================
// document.getElementById("btn").addEventListener("click",show);
// function show(){
//     fetch('https://dummyjson.com/products/1')
//     .then((res) => {  if(!res.ok){
//             throw Error(res.statusText)
//     }  return res.json() })
//     .then((data) => {console.log(data) })
//     .catch((error) => {console.log(error) })
// }


//================After fetching a data from text file print it on Web page when only single data is present
// document.getElementById("btn").addEventListener("click",show);
// function show(){
//     fetch('https://dummyjson.com/products/1')
//     .then((res) => {  if(!res.ok){
//             throw Error(res.statusText)
//     }  return res.json() })
//     .then((data) => {
//         document.getElementById('pid').innerText = data.id;
//         document.getElementById('mid').innerText = data.title;
//         document.getElementById('cid').innerText = data.description;
//      })
//     .catch((error) => {console.log(error) })
//}


//================After fetching a data from text file print it on Web page when multiple data is present
// document.getElementById("btn").addEventListener("click",show);
// function show(){
//     fetch('https://dummyjson.com/products')
//     .then((res) => {  if(!res.ok){
//             throw Error(res.statusText)
//     }  return res.json() })
//     .then((data) => {
//         data.forEach(element => {
//             console.log(element.id+" "+element.title+" "+element.description);
//         });
//      })
//     .catch((error) => {console.log(error) })
// }

//================After fetching a Multiple data  from text file print it on Web page when multiple data is present in an API
// document.getElementById("btn").addEventListener("click",show);
// function show(){
//     fetch('https://dummyjson.com/products')
//     .then((res) => {  if(!res.ok){
//             throw Error(res.statusText)
//     }  return res.json() })
//     .then((data) => {
//         let output = document.getElementById('divData');
//         data.forEach(element => {
//            output.innerHTML += `
//            <div>ID:  ${element.id}</div>
//            <div>TITLE:  ${element.title}</div>
//            <div>BODY:  ${element.body}</div><hr>
//            `
//         });
//      })
//     .catch((error) => {console.log(error) })
// }


// //======Fetch data from API of SINGLE data using async and await 
// document.getElementById("btn").addEventListener("click",show);
// async function show(){
//     try{
//         const res = await fetch('https://dummyjson.com/products/1');
//         if(!res.ok){
//          throw Error(res.statusText);
//         }
//         const ans = await res.json();
//        console.log(ans);
//     } catch(error) {
//         console.log(error);
//     } 
// }

//======Fetch data from API of MULTIPLE data using async and await 
// document.getElementById("btn").addEventListener("click",show);
// async function show(){
//     try{
//         const res = await fetch('https://dummyjson.com/products');
//         if(!res.ok){
//          throw Error(res.statusText);
//         }
//         const ans = await res.json();
//        console.log(ans);
//     } catch(error) {
//         console.log(error);
//     } 
// }


// //======Fetch data from API of SINGLE data using async and await and print it on web page
// document.getElementById("btn").addEventListener("click",show);
// async function show(){
//     try{
//         const res = await fetch('https://dummyjson.com/products/1');
//         if(!res.ok){
//          throw Error(res.statusText);
//         }
//         const ans = await res.json();
//         document.write(ans.id+" "+ans.title+" "+ans.description);
//     } catch(error) {
//         console.log(error);
//     } 
// }

//======Fetch data from API of  MULTIPLE data using async and await and print it on web page
// document.getElementById("btn").addEventListener("click",show);
// async function show(){
//     try{
//         const res = await fetch('https://dummyjson.com/products');
//         if(!res.ok){
//          throw Error(res.statusText);
//         }
//         const ans = await res.json();
//         var output = document.getElementById('divData');
//         ans.array.forEach(element => {
//             output.innerHTML += `
//                        <div>ID:  ${element.id}</div>
//                        <div>TITLE:  ${element.title}</div>
//                        <div>BODY:  ${element.body}</div><hr>
//                        `
//         });
//     } catch(error) {
//         console.log(error);
//     } 
// }


//POST DATA TO API USING PROMISE AND THEN METHOD.
// document.getElementById("btn").addEventListener("click",show);

// function show(){
//     const myInit = {
//         method: 'POST',
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body : {  "name": "Daksh", "job": "SWE"}
//     }
//     fetch('https://reqres.in/api/users', myInit)
//     .then( (res) => {
//         if(!res.ok){
//             throw Error(res.statusText);
//         }
//         return res.json()
//     }).then( (data) => console.log(data))
//     .catch((error) => console.log(error))
// }

//POST DATA TO API USING PROMISE AND THEN METHOD.
document.getElementById("btn").addEventListener("click",show);
async function show(){
    try{
        const myInit = {
                    method: 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : {  "name": "Daksh", "job": "SWE"}
                }
        const res = await fetch('https://reqres.in/api/users',myInit);
        if(!res.ok){
         throw Error(res.statusText);
        }
        const ans = await res.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    } 
}