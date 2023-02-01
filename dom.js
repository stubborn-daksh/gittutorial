//Examine the document object
        // console.log(document);
        // console.log(document.domain);
        // console.log(document.URL);
        // console.dir(document.body);
        // console.dir(document.title);
        // console.log(document.doctype);
        // console.log(document.head);
        // console.log(document.body);
        // console.log(document.all);
        // console.log(document.all[10]);
        // document.all[10].textContent = "Daksh";
        // console.log(document.forms[0]);
        // console.log(document.links);
        // console.log(document.images);
//GetElementById
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// header.style.borderBottom = "1px solid black";

var getItem = document.getElementsByClassName('title');
getItem.style.fontWeight = 'bold';
getItem[1].style.fontWeight = 'bold';
getItem[1].style.textColor = 'green';
getItem[3].style.backgroundColor = 'yellow';
// header.textContent = "Hello";
// header.innerText = "GoodBye";
// header.innerHTML = "<h4>Hello</h4>";
// var data = document.getElementsByClassName('container');
// console.log(data);