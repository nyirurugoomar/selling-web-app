// Declearing html elements

const imgDiv = document.querySelector(".profile-pic-div");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

//if user hover on profile div

imgDiv.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "block";
});

// if user hover out from img div

imgDiv.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});

//Choosing an image to upload functionality
// when user choose a photo to upload

file.addEventListener("change", function () {
  // this refers to file
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});

function calculate(){
  var field1 = document.getElementById("sell-info").value;
  var field2 = document.getElementById("cost-info").value;
  var result = parseFloat(field1)+parseFloat(field2);
  var name = document.getElementById("fname").value;

  if(!isNaN(result)){
    document.getElementById("answer").innerHTML="The name of Product is " +name+ " The sum of product "+result;
    

  }

  

}

var inputs = document.querySelectorAll('input');
var btnClear = document.querySelector('cancel')

// function reset(){
//   document.getElementById("answer").remove();
  
// }



