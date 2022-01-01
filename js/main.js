"use strict";

// let carousel = document.querySelector('.carousel');
let img = document.getElementsByTagName('li');
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');
let i = 0;
let currentImg = img[i];
let indexImg = img.length - 1;

showHidden();



function showHidden() {
    
    for (const iterator of img) {
        iterator.style.display = "none";
        currentImg.style.display = "block";
    }
}




previous.onclick = function() {
    i--;
    
    if( i < 0) {
        i = indexImg;
    } 
    currentImg = img[i];
    showHidden();
}

next.onclick = function() {
    i++; 
    
    if( i > indexImg ){
        i = 0;
    }
    currentImg = img[i];
    showHidden();
}