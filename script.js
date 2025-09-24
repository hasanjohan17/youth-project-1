
document.addEventListener("DOMContentLoaded", function() {
  let step2 = document.getElementById("step2");
  let popup2 = document.getElementById("popup2");
  let close2 = document.querySelector(".close2");

  step2.addEventListener("click", function() {
    popup2.classList.add("show");
  });

  close2.addEventListener("click", function() {
    popup2.classList.remove("show");
  });

  window.addEventListener("click", function(e) {
    if (e.target == popup2) {
      popup2.classList.remove("show");
    }
  });
});

function copyText2() {
  let copyText = document.getElementById("copyText2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("تم نسخ النص: " + copyText.value);
}


const searchInput = document.getElementById("searchInput");
const coursesList = document.getElementById("coursesList");
const courses1 = coursesList.getElementsByClassName("course");

searchInput.addEventListener("keyup", function() {
  let filter = searchInput.value.toLowerCase();
  for (let i = 0; i < courses1.length; i++) {
    let title = courses1[i].getElementsByTagName("h3")[0];
    if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {
      courses1[i].style.display = "";
    } else {
      courses1[i].style.display = "none";
    }
  }
});



const modal = document.getElementById("courseModal");
const closeBtn = document.querySelector(".modal .close");
const courses = document.querySelectorAll(".course a");

courses.forEach(course => {
    course.addEventListener("click", function(e){
        e.preventDefault(); 
        modal.style.display = "block";
        modal.classList.add("show");
    });
});

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
    modal.classList.remove("show");
});

window.addEventListener("click", function(e){
    if(e.target == modal){
        modal.style.display = "none";
        modal.classList.remove("show");
    }
});


