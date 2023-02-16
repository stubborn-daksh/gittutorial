
var selectedRow = null;

function showAlert(message, className){
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);
  setTimeout( () => document.querySelector(".alert").remove() , 3000);
}
//clear all fields
function clearFields(){
    document.querySelector('#stuId').value = "";
    document.querySelector('#stuName').value = "";
    document.querySelector('#stuEmail').value = "";
    document.querySelector('#stuCity').value = "";
}

//Add data in a form
document.querySelector("#student-form").addEventListener("submit",(e) =>{
    e.preventDefault();
    const stuId = document.querySelector("#stuId").value;
    const stuName = document.querySelector("#stuName").value;
    const stuEmail = document.querySelector("#stuEmail").value;
    const stuCity = document.querySelector("#stuCity").value;

    //validate
    if( stuId == "" || stuName=="" || stuEmail== "" || stuCity== ""){
        showAlert("Please Fill all the details","danger");
    } else {
        if(selectedRow == null){
            const list = document.querySelector('#student-list');
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${stuId}</td>
                <td>${stuName}</td>
                <td>${stuEmail}</td>
                <td>${stuCity}</td>
                <td>  
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added...","Success");
        } else {
            selectedRow.children[0].textContent = stuId;
            selectedRow.children[1].textContent = stuName;
            selectedRow.children[2].textContent = stuEmail;
            selectedRow.children[3].textContent = stuCity;
            selectedRow = null;
            showAlert("Student Info Edited" ,"info")
        }
        clearFields();
    }
})

//Edit Data
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains('edit')){
        selectedRow = target.parentElement.parentElement;
        document.querySelector('#stuId').value = selectedRow.children[0].textContent;
        document.querySelector('#stuName').value = selectedRow.children[1].textContent;
        document.querySelector('#stuEmail').value = selectedRow.children[2].textContent;
        document.querySelector('#stuCity').value = selectedRow.children[3].textContent;
    }
})

//student data delete
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
})