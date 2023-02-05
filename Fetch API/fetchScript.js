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

//------------check in a code error is happening or not 
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