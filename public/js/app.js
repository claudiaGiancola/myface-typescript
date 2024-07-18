document.addEventListener("DOMContentLoaded", function () {
  
  const changeColourButton = document.getElementById("change-colour");
  const posts = document.querySelectorAll(".posts");
  const hamburgerButton = document.querySelector(".hamburger-button");
  const navbar = document.querySelector(".navbar");
  const postListBody = document.querySelector("#post-list");
  const body = document.querySelector("body");
  
  changeColourButton.addEventListener("click", function () {
    posts.forEach((post) => post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
  })

hamburgerButton.addEventListener("click", function(){
  navbar.classList.toggle("hidden");
})

postListBody.addEventListener("click", function() {
  navbar.classList.add("hidden");
})

body.addEventListener("keydown", function(e){
  if (e.key == "Escape") {
    navbar.classList.add("hidden");
  }
})













});

