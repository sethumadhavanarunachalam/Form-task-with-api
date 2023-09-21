$(document).ready(function () {
  $(".form-div-hide").hide();
  $(".nav-btn-form").click(function () {
    $(".form-div-hide").toggle();
  });
  $(".atagform").click(function () {
    $("#ptagform").toggle();
  });
  $("#editid").hide();
  $(".alert").hide();
  $("#update-btn").hide();
});
function onFormSubmit(e) {
  event.preventDefault();
}

function mailValidation() {
  let error = document.getElementById("mailerror");
  let mailid = document.getElementById("usermail").value;
  let usermail = document.getElementById("usermail");
  console.log(mailid);
  fetch("https://650a7453dfd73d1fab0863ad.mockapi.io/formdata")
    .then((res) => res.json())
    .then((response) => {
      console.log(response.length);
      for (var i = 0; i <= response.length - 1; i++) {
        // console.log(response[i].name);
        // console.log(response[i].mail);
        if (response[i].mail == mailid || mailid == "") {
          error.innerHTML = "invalid mail &#10060;";
          mailsuccess.innerHTML = "";
          usermail.style.border = "2px solid red";
          console.log("mail already exists");
          $("#submit-btn").hide();
          $(".alert").show();

          return false;
        } else {
          usermail.style.border = "1px solid green";
          $(".alert").hide();
          $("#submit-btn").show();
          console.log("new mail");
         
          error.innerText = "";
          mailsuccess.innerHTML = "That's Good &#10004;";
        }
      }
    });
}
function getFormData() {
  return {
    mail: document.getElementById("usermail").value,
    name: document.getElementById("username").value,
    location: document.getElementById("location").value,
    gender: document.getElementById("gender").value,
  };
}

function setEditData(data) {
  console.log(data.id);
  $(".form-div-hide").show();
  $("#submit-btn").hide();
  $("#update-btn").show();
  document.getElementById("editid").innerText = data.id;

  document.getElementById("username").value = data.name;
  document.getElementById("usermail").value = data.mail;
  document.getElementById("location").value = data.location;
  document.getElementById("gender").value = data.gender;
}

async function editDataCall(data) {
  await fetch(`https://650a7453dfd73d1fab0863ad.mockapi.io/formdata/${data}`)
    .then((res) => res.json())
    .then((response) => {
      setEditData(response);
      $("#submit-btn").hide();
      $("#update-btn").show();
    });
}

async function deleteData(id) {
  swal({
    title: "Are you sure for delete?",
    text: "This form will be delete",
    icon: "warning",
    buttons: true,
    dangerMode: true,
})
.then(function (isOkay) {
    if (isOkay) {
      $(".toast-body").show();
      fetch(`https://650a7453dfd73d1fab0863ad.mockapi.io/formdata/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((response) => {
          let toastElement = document.getElementById("toastdelete");


let toast = new bootstrap.Toast(toastElement);
toast.show();
          getData();
        });
    }
});

return false;
 
}


async function updateRecord() {
  let id = document.getElementById("editid").innerText;
  
  let updatedData = getFormData();
  
  fetch(`https://650a7453dfd73d1fab0863ad.mockapi.io/formdata/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.json())
  .then((response) => {
    getData();
    resetForm();
    $("#update-btn").hide();
    $("#submit-btn").show();
    $(".form-div-hide").hide();
    });

    // let updatebtn = document.getElementById("update-btn");
    let toastElement = document.getElementById("toast");

    
      let toast = new bootstrap.Toast(toastElement);
      toast.show();
   
}

async function addNewData() {
  const formData = getFormData();

  fetch("https://650a7453dfd73d1fab0863ad.mockapi.io/formdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      console.log("data added successfully");
      getData();
      resetForm();
    });
    let toastElement = document.getElementById("toastadd");

    
    let toast = new bootstrap.Toast(toastElement);
    toast.show();
}

async function getData() {
  await fetch("https://650a7453dfd73d1fab0863ad.mockapi.io/formdata")
    .then((res) => res.json())
    .then((response) => {
      var tmpData = "";
      response.forEach((user) => {
        tmpData += "<tr>";

        tmpData += "<td>" + user.mail + "</td>";
        tmpData += "<td>" + user.name + "</td>";
        tmpData += "<td>" + user.location + "</td>";
        tmpData += "<td>" + user.gender + "</td>";
        tmpData +=
          "<td><button class='btn btn-primary' onclick='editDataCall(`" +
          user.id +
          "`,this)'>Edit</button></td>";
        tmpData +=
          "<td><button class='btn btn-danger' onclick='deleteData(`" +
          user.id +
          "`)'>Delete</button></td>";

        tmpData += "</tr>";
      });

      document.getElementById("tablebody").innerHTML = tmpData;
      resetForm();
    });
}
getData();

function resetForm() {
  $("#update-btn").hide();
  $("#submit-btn").show();
  $(".alert").hide();
  document.getElementById("usermail").value = "";
  document.getElementById("username").value = "";
  document.getElementById("location").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("mailerror").innerHTML = "";
  document.getElementById("mailsuccess").innerHTML = "";
  document.getElementById("usererror").innerHTML = "";
  document.getElementById("usersuccess").innerHTML = "";
  document.getElementById("locationerror").innerHTML = "";
  document.getElementById("locationsuccess").innerHTML = "";
  document.getElementById("gendererror").innerHTML = "";
  document.getElementById("gendersuccess").innerHTML = "";
  document.getElementById("usermail").style.border="1px solid gray";
  document.getElementById("username").style.border="1px solid gray";
  document.getElementById("location").style.border="1px solid gray";
  document.getElementById("gender").style.border="1px solid gray";
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
    username.style.border = "1px solid green";
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
    location.style.border = "1px solid green";
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
    gender.style.border = "1px solid green";
    error.innerHTML = "";
    gendersuccess.innerHTML = "That's Good &#10004;";
  } else {
  }
}
