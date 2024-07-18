document.addEventListener("DOMContentLoaded", function () {
  
  const changeColourButton = document.getElementById("change-colour");
  const posts = document.querySelectorAll(".posts");
  const hamburgerButton = document.querySelector(".hamburger-button");
  const navbar = document.querySelector(".navbar");
  const postListBody = document.querySelector("#post-list");

  changeColourButton.addEventListener("click", function () {
    posts.forEach((post) => post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
  })

hamburgerButton.addEventListener("click", function(){
  navbar.classList.toggle("hidden");
})

postListBody.addEventListener("click", function() {
  navbar.classList.add("hidden");
})

const coverPic = document.querySelector(".cover-pic");

coverPic.style.classList.add("hidden");














});

