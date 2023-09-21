var selectedRow = null;
var x = 0;
$(document).ready(function () {
  $(".form-div-hide").hide();
  $(".nav-btn-form").click(function () {
    $(".form-div-hide").toggle();
  });
  $(".atagform").click(function () {
    $("#ptagform").toggle();
  });
  $("#update-btn").hide();
  $(".alert").hide();
});
// $(document).ready(function(){
//   $(".check").click(function(){
      
//     // Select all the rows in the table
//     // and get the count of the selected elements
//     var rowCount = $("#table-iden tr").length;
//     alert(rowCount); 
//   });
// });


function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
 
  var tablebody = document.getElementById("tablebody").children;
  var rowCount = $("#table-iden tr").length;
 


  if (rowCount > 1) {
    for (var i = 0; i < rowCount-1; i++) {
            console.log(tablebody[i].cells[0].innerText);
            if (formData.usermail == tablebody[i].cells[0].innerText) {
              resetForm();
              $(".alert").show();
  }else{
    $(".alert").hide();
    insertNewRecord(formData);
    resetForm();
  }
            }}
  else {
    insertNewRecord(formData);
  }
  $(".alert").hide(3000);
}
// if(rowCount = 1)


function readFormData() {
  var formData = {};
  formData["usermail"] = document.getElementById("usermail").value;
  formData["username"] = document.getElementById("username").value;
  formData["location"] = document.getElementById("location").value;
  formData["gender"] = document.getElementById("gender").value;
  return formData;
}

async function insertNewRecord(data) {
    console.log(data);
    // let addData = await fetch("https://650a7453dfd73d1fab0863ad.mockapi.io/formdata");
    // let refine = addData.json();
    fetch("https://650a7453dfd73d1fab0863ad.mockapi.io/formdata"),{
      method:"POST",
      body: JSON.stringify(data),
      headers:{"Content-type":"application/json"},
    }

    


    var table = document
    .getElementById("table-iden")
    .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(x);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.usermail;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.username;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.location;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.gender;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;

  x++;
  console.log(`value of row =${x}`);

  resetForm();

}


function onEdit(td) {
  $("#update-btn").show();
  $("#submit-btn").hide();
  selectedRow = td.parentElement.parentElement;
  document.getElementById("usermail").value = selectedRow.cells[0].innerHTML;
  document.getElementById("username").value = selectedRow.cells[1].innerHTML;
  document.getElementById("location").value = selectedRow.cells[2].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
}

function updateRecord() {
  var formData = {};
  formData["usermail"] = document.getElementById("usermail").value;
  formData["username"] = document.getElementById("username").value;
  formData["location"] = document.getElementById("location").value;
  formData["gender"] = document.getElementById("gender").value;
  selectedRow.cells[0].innerHTML = formData.usermail;
  selectedRow.cells[1].innerHTML = formData.username;
  selectedRow.cells[2].innerHTML = formData.location;
  selectedRow.cells[3].innerHTML = formData.gender;
  resetForm();
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("table-iden").deleteRow(row.rowIndex);
    resetForm();
    x--;
  }
}

function resetForm() {
  $("#update-btn").hide();
  $("#submit-btn").show();
  document.getElementById("usermail").value = "";
  document.getElementById("username").value = "";
  document.getElementById("location").value = "";
  document.getElementById("gender").value = "";
  selectedRow = null;
  document.getElementById("mailerror").innerHTML = "";
  document.getElementById("mailsuccess").innerHTML = "";
  document.getElementById("usererror").innerHTML = "";
  document.getElementById("usersuccess").innerHTML = "";
  document.getElementById("locationerror").innerHTML = "";
  document.getElementById("locationsuccess").innerHTML = "";
  document.getElementById("gendererror").innerHTML = "";
  document.getElementById("gendersuccess").innerHTML = "";
}

function validation() {
  let usermail = document.getElementById("usermail");
  let usermailval = document.getElementById("usermail").value;
  let error = document.getElementById("mailerror");
  if (usermailval == "") {
    usermail.style.border = "2px solid red";
    error.innerHTML = "invalid mail &#10060;";
    mailsuccess.innerHTML = "";
  } else if (usermailval != "") {
    usermail.style.border = "none";
    error.innerText = "";
    mailsuccess.innerHTML = "That's Good &#10004;";
  } else {
  }
}
function namevalidation() {
  let username = document.getElementById("username");
  let usernameval = document.getElementById("username").value;
  let error = document.getElementById("usererror");
  if (usernameval == "") {
    username.style.border = "2px solid red";
    error.innerHTML = "invalid username &#10060;";
    usersuccess.innerHTML = "";
  } else if (usernameval != "") {
    username.style.border = "none";
    error.innerHTML = "";
    usersuccess.innerHTML = "That's Good &#10004;";
  } else {
  }
}
function locationvalidation() {
  let location = document.getElementById("location");
  let locationval = document.getElementById("location").value;
  let error = document.getElementById("locationerror");
  if (locationval == "") {
    location.style.border = "2px solid red";
    error.innerHTML = "invalid location &#10060;";
    locationsuccess.innerHTML = "";
  } else if (locationval != "") {
    location.style.border = "none";
    error.innerHTML = "";
    locationsuccess.innerHTML = "That's Good &#10004;";
  } else {
  }
}
function gendervalidation() {
  let gender = document.getElementById("gender");
  let genderval = document.getElementById("gender").value;
  let error = document.getElementById("gendererror");
  if (genderval == "") {
    gender.style.border = "2px solid red";
    error.innerHTML = "invalid gender &#10060;";
    gendersuccess.innerHTML = "";
  } else if (genderval != "") {
    gender.style.border = "none";
    error.innerHTML = "";
    gendersuccess.innerHTML = "That's Good &#10004;";
  } else {
  }
}


