
let currentDate = new Date();
let hours;
const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = currentDate.getDay();
const dayOfTheWeek = daysOfTheWeek[day];

document.getElementById('day-of-the-week').innerHTML += dayOfTheWeek + "! ";

setInterval(() => {
    currentDate = new Date();

    document.getElementById("date").innerHTML = currentDate.toLocaleDateString();
    document.getElementById('time').innerHTML = currentDate.toLocaleTimeString();
}, 1000);

hours = currentDate.getHours();


if(hours >= 5 && hours < 12){
    document.getElementById('greeting').innerHTML += "Good morning!";
    document.querySelector('body').style = "background-color: #E7EFC5";
    document.getElementById('dynamic-img').src = "seattle-sunrise.jpg";
}
else if(hours >= 12 && hours < 18){
    document.getElementById('greeting').innerHTML += "Good afternoon!";
    document.querySelector('body').style = "background-color: #bfd7b5";
    document.getElementById('dynamic-img').src = "seattle-daytime.jpg";
}
else if(hours >= 18 && hours < 23){
    document.getElementById('greeting').innerHTML += "Good evening!";
    document.querySelector('body').style = "background-color: #A3C4BC";
    document.getElementById('dynamic-img').src = "seattle-sunset.jpg";
}
else {
    document.getElementById('greeting').innerHTML += "Good night!";
    document.querySelector('body').style = "background-color: #413C58";
    document.getElementById('dynamic-img').src = "seattle-night.jpg";
}

document.getElementById('this-year').innerHTML = currentDate.getFullYear();

document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 