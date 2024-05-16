"use strict";
// let background = document.querySelector(".slider");
// let imgsarray = ["location_de_voiture_de_luxe_a_Perpignan_et_pour_mariage_2048x2048.jpg", "penurie-location-voiture-vacances-4.jpg", 
// "774x350_Visuel_Voiture_au_Mois.jpg","slide_0003_pexels-photo-70912.jpg"];
// setInterval(()=>{
//     let randomNumber = Math.floor(Math.random() *
// imgsarray.length);
// background.style.backgroundImage = 'url(' + imgsarray[randomNumber] + ')';
// }, 2000);
//$(".list.l2").click(function(){
  //  $(".slider").hide()  
  //  $(".about").toggle()    
//})
//$(".list.l0").click(function(){
   // $(".slider").show()  
   // $(".about").hide()    
//})


// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent default behavior of the button
    
    // Prompt the user for username and password
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    
    // Log the username and password to the console
    console.log("Login:");
    console.log("Username:", username);
    console.log("Password:", password);
}

// Function to handle sign up
function handleSignUp(event) {
    event.preventDefault(); // Prevent default behavior of the button
    
    // Prompt the user for username and password
    const username = prompt("Choose a username:");
    const password = prompt("Choose a password:");
    
    // Log the username and password to the console
    console.log("Sign Up:");
    console.log("Username:", username);
    console.log("Password:", password);
}

