var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
          else 
            updateRecord(formData);
            resetForm();
        
            
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;

}

function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    // resetForm();

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.gender;
    // resetForm();

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    // var formData = readFormData();
    // console.log(formData);
   
   isValid = true;
  if (document.getElementById("id").value == "") {
    isValid = false;
    document.getElementById("idValidationError").classList.remove("hide");
    // document.getElementById("idValidationErrorlimit").classList.remove("hide");

} 

else {
    isValid = true;
    if (!document.getElementById("idValidationError").classList.contains("hide"))
        document.getElementById("idValidationError").classList.add("hide");
}
// 

// 

  
   if (document.getElementById("name").value == "") {
       isValid = false;
       document.getElementById("nameValidationError").classList.remove("hide");
   } else {
       isValid = true;
       if (!document.getElementById("nameValidationError").classList.contains("hide"))
           document.getElementById("nameValidationError").classList.add("hide");
   }
   
   if (document.getElementById("age").value == "") {
       isValid = false;
       document.getElementById("ageValidationError").classList.remove("hide");
       document.getElementById("ageValidationErrorLimit").classList.add("hide");
   } else if(document.getElementById("age").value < 18 || document.getElementById("age").value > 60){		
        isValid = false;
        document.getElementById("ageValidationError").classList.add("hide");
       document.getElementById("ageValidationErrorLimit").classList.remove("hide");
   }	else {
       isValid = true;
       if (!document.getElementById("ageValidationError").classList.contains("hide"))
           document.getElementById("ageValidationError").classList.add("hide");
       else{
            if (!document.getElementById("ageValidationErrorLimit").classList.contains("hide"))
           document.getElementById("ageValidationErrorLimit").classList.add("hide");
           
       }
       
   }
   if (document.getElementById("gender").value == "") {
       isValid = false;
       document.getElementById("genderValidationError").classList.remove("hide");
   } else {
       isValid = true;
       if (!document.getElementById("genderValidationError").classList.contains("hide"))
           document.getElementById("genderValidationError").classList.add("hide");
   }
   return isValid;

}
