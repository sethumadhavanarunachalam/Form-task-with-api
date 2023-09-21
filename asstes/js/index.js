$(document).ready(function () {
  $(".form-div-hide").hide();
  $(".nav-btn-form").click(function () {
    $(".form-div-hide").toggle();
  });
});
$(document).ready(function () {
  $(".atagform").click(function () {
    $("#ptagform").toggle();
  });
});
const form = document.querySelector("#form");
form.addEventListener("submit" , (e) => {
  e.preventDefault();
  onSubmitFunction()
  // getFormData();
  const overalldata =  getFormData()
  addNewData(overalldata);
})
function onSubmitFunction(){
   
 

}

function getFormData(){
  const formgroup ={};
  
     formgroup["usermail"] = document.getElementById("usermail").value;
   formgroup["username"] = document.getElementById("username").value;
   formgroup["location"] = document.getElementById("location").value;
   formgroup["gender"] = document.getElementById("gender").value;
   console.log(formgroup);
   return formgroup
    // let tablebody = document.getElementById("tablebody");
    // let createtrow = document.createElement("tr");
    // let usermaildata = document.createElement("td");
    // let usernamedata = document.createElement("td");
    // let locationdata = document.createElement("td");
    // let genderdata = document.createElement("td");
   
    // usermaildata.innerHTML = usermail.value;
    // usernamedata.innerHTML = username.value;
    // locationdata.innerHTML = location.value;
    // genderdata.innerHTML = gender.value;
   

    // createtrow.append(
    //   usermaildata,
    //   usernamedata,
    //   locationdata,
    //   genderdata
      
    // );
    // tablebody.append(createtrow);
}




// function  getFormData(){
//   var formgroup = {};

//   formgroup["usermail"] = document.getElementById("usermail").Value;
//   formgroup["username"] = document.getElementById("username").Value;
//   formgroup["location"] = document.getElementById("location").Value;
//   formgroup["gender"] = document.getElementById("gender").Value;

//   return formgroup;

 
// }

function addNewData(formgroup){
  //table
  let table = document.getElementById("table");
  let tablebody = document.createElement("tr");
   let usermail = document.createElement("td");
   let username = document.createElement("td");
   let location = document.createElement("td");
   let gender = document.createElement("td");


    usermail.innerHTML = "formgroup.usermail";
    

    // cell1 = tablebody.insertCell(0);
		// cell1.innerHTML = formgroup.usermail;
    // cell2 = tablebody.insertCell(1);
		// cell2.innerHTML = formgroup.username;
    // cell3 = tablebody.insertCell(2);
		// cell3.innerHTML = formgroup.location;
    // cell4 = tablebody.insertCell(3);
		// cell4.innerHTML = formgroup.gender;
    // cell4 = tablebody.insertCell(4);
        // cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
       table.append(tablebody)

      }
















// const usermail = document.querySelector("#usermail");
// const username = document.querySelector("#username");



// function validation(){
//     const usernameval = username.value.trim();
//     const usermailvel = usermail.value.trim();

//     if(usernameval === ""){
//         setError(username,"username is required")
//     }else{
//         setSuccess(username)
//     }
//     if(usermailvel === ""){
//         setError(username,"username is required")
//     }else{
//         setSuccess(usermail)
//     }
// }

// function setError(element,message){
//     const inputgroup = element.parentElement;
//     const errorElement = inputgroup.querySelector(".error");

//     errorElement.innerText = message;
//     inputgroup.classList.add("error")
//     inputgroup.classList.remove("success")
// }
// function setSuccess(element){
//     const inputgroup = element.parentElement;
//     const errorElement = inputgroup.querySelector(".error");

//     errorElement.innerText = '';
//     inputgroup.classList.add("success")
//     inputgroup.classList.remove("error")
// }
 

// function validation() {
    
//   let usermail = document.getElementById("usermail");
//   let username = document.getElementById("username");
//   let location = document.getElementById("location");
//   let gender = document.getElementById("gender");
//   let age = document.getElementById("age");
//   let bloodgroup = document.getElementById("bloodgroup");
//   let transport = document.getElementById("transport");

//   console.log(usermail);
//   console.log(username);
//   console.log(location);
//   console.log(gender);
//   console.log(age);
//   console.log(bloodgroup);
//   console.log(transport);

//   if(usermail.value.trim() === ""){
//     alert("enter valid mail id");
//     $(document).ready(function(){
//         $("#usermail").css({"border":"3px solid red"})
//     })
//     return false;
// }
// // else if(usermail.value.trim() !== "") {
// //     // alert("its really good")
// //     $(document).ready(function(){
// //         $("#usermail").css({"border":"none"})
// //     })
// //     return false;
              
// //   }
//  else{
    


 

  
 
//     let tablebody = document.getElementById("tablebody");
//     let createtrow = document.createElement("tr");
//     let usermaildata = document.createElement("td");
//     let usernamedata = document.createElement("td");
//     let locationdata = document.createElement("td");
//     let genderdata = document.createElement("td");
//     let agedata = document.createElement("td");
//     let bloodgroupdata = document.createElement("td");
//     let transportdata = document.createElement("td");





//     usermaildata.innerHTML = usermail.value;
//     usernamedata.innerHTML = username.value;
//     locationdata.innerHTML = location.value;
//     genderdata.innerHTML = gender.value;
//     agedata.innerHTML = age.value;
//     bloodgroupdata.innerHTML = bloodgroup.value;
//     transportdata.innerHTML = transport.value;

//     createtrow.append(
//       usermaildata,
//       usernamedata,
//       locationdata,
//       genderdata,
//       agedata,
//       bloodgroupdata,
//       transportdata
//     );
//     tablebody.append(createtrow);
//     console.log(usermail);
  
//     document.getElementById('usermail').value = "";
//     document.getElementById('username').value = "";
//     document.getElementById('location').value = "";
//     document.getElementById('gender').value = "";
//     document.getElementById('age').value = "";
//     document.getElementById('bloodgroup').value = "";
//     document.getElementById('transport').value = "";
//     true;
// }
//   }
// }



  //    console.log(document.getElementById("usermail").value);


//   if (usermail.value.trim() == "") {
//     usermail.style.border = "solid 3px red"
//     $(document).ready(function(){
//         $(".invalid-mail").show().text("invalid mail").css({"color":"red"});
//     })
//     return false;
//   } else if (username.value.trim() == "") {
//     username.style.border = "solid 3px red"
//     $(document).ready(function(){
//         $(".invalid-username").show().text("username box is blank").css({"color":"red"});
//     })
//     return false;
//   }
//   else if (username.value.trim() != "") {
//     username.style.border = "solid black"
//     $(document).ready(function(){
//         $("#usermail").change(function(){
//             $(".invalid-username").hide();

//         })
//     })
//     return false;
//   }




//   else if (username.value.trim().length < 5) {
//     username.style.border = "solid 3px orange"
//     $(document).ready(function(){
//         $(".invalid-username").show().text("username too short").css({"color":"orange"});
//     })
//     return false;
//   } else if (location.value.trim() == "") {
//     location.style.border = "solid 3px red"
//     $(document).ready(function(){
//         $(".invalid-location").show().text("location box is blank").css({"color":"red"});
//     })
//     return false;
//   } else if (gender.value.trim() == "") {
//     gender.style.border = "solid 3px red"
//     $(document).ready(function(){
//         $(".invalid-gender").show().text("gender box is blank").css({"color":"red"});
//     })
//     return false;
//   } else if (age.value.trim() == "") {
//     age.style.border = "solid 3px red"
//     $(document).ready(function(){
//         $(".invalid-age").show().text("age box is blank").css({"color":"red"});
//     })
//     return false;
//   } else if (age.value.trim().length > 2) {
//     age.style.border = "solid 3px orange"
//     $(document).ready(function(){
//         $(".invalid-age").show().text("invalid age").css({"color":"orange"});
//     })
//     return false;
//   } else if (bloodgroup.value.trim() == "") {
//     bloodgroup.style.border = "solid 3px red"
//     $(document).ready(function(){
//         $(".invalid-bloodgroup").show().text("bloodgroup box is blank").css({"color":"red"});
//     })
//     return false;
//   } else if (transport.value.trim() == "") {
//     transport.style.border = "solid 3px red"
//     $(document).ready(function(){
//         $(".invalid-transport").show().text("transport box is blank").css({"color":"red"});
//     })
//     return false;
//   } else 
