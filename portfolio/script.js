//Letter animation (For the header 'Anton')
function updateSize(letter, value) {
    
    if (value == "bigger") {

        //Update previous letter
        if(letter != 1){
            letters[letter -1].style.fontSize =  "11rem";
            letters[letter -1].style.color = "#cfcece";
            letters[letter -1].style.textShadow = "1px 1px 2px #cfcece"
        }
       
        //Update hovered letter
        letters[letter].style.fontSize =  "12rem";
        letters[letter].style.color = "white";
        letters[letter].style.textShadow = "1px 1px 5px white"

        //Update next letter
        if(letter != 5){
            letters[letter +1].style.fontSize =  "11rem";
            letters[letter +1].style.color = "#cfcece";
            letters[letter +1].style.textShadow = "1px 1px 2px #cfcece"
        }
    }
    else{

        //Update all letters
        letters[letter].style.fontSize =  "9rem";
        letters[letter].style.color = "#b8b8b8";
        letters[letter].style.textShadow = "none"
        
        if(letter != 5){
            letters[letter +1].style.fontSize =  "9rem";
            letters[letter +1].style.color = "#b8b8b8";
            letters[letter +1].style.textShadow = "none"
        }

        if(letter != 1){
            letters[letter -1].style.fontSize =  "9rem";
            letters[letter -1].style.color = "#b8b8b8";
            letters[letter -1].style.textShadow = "none"
        }
    }
    
}

let letters = [];

//add Every letter to 'letters' and add an Event listener for 'mousein' and 'mouseout'
for (let i = 1; i <= 5; i++) {
    
    letters[i] = document.getElementById("headingLetter" + i);

    if (letters[i]) {
        letters[i].addEventListener("mouseover", function() {
            updateSize(i, "bigger");
        });

        letters[i].addEventListener("mouseout", function() {
            updateSize(i, "smaller");
        });
    } else {
        console.error("Element with ID 'headingLetter" + i + "' not found.");
    }
}





//  function for the scrolling (eg when clicking 'contact' or 'projects' buttons)
function smoothScrollTo(destination) {
    //scroll to destination
    window.scrollTo({
        top: destination,
        behavior: 'smooth'
    })
}




//Fucking taskbar retraxs 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-100px";
}
prevScrollpos = currentScrollPos;
}




//da animation on da scwoll UbU
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
