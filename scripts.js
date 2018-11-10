//delegate function, called when user scrolls
window.onscroll = function() {scrollCheck()};
//check to see if user has scrolled 20px from the top
function scrollCheck() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("topbtn").style.display = "block";
    } else {
        document.getElementById("topbtn").style.display = "none";
    }
}
//tell the page to go back to the top
function goToTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var sldindex = 1;
ShowSlide(sldindex);

function ChangeImage(n) {
    ShowSlide(sldindex += n);
}

function ShowSlide (n) {
    //get the images for the slide by class name
    var slds = document.getElementsByClassName("slides");
    //check to see if the next index is valid
    if(n > slds.length)
    {
        sldindex = 1;
    } else if(n < 1) {
        sldindex = slds.length;
    }
    //loop through the slides and turn them off
    for(var i = 0; i < slds.length; i++)
    {
        slds[i].style.display = "none";
    }
    //turn on the image to be shown
    slds[sldindex-1].style.display = "block";
    //update the text
    NewsText();
}

function NewsText() {
    if(sldindex == 1)
    {
        document.getElementById("newsheader").innerHTML = "Welcome to Car Rampage!";
        document.getElementById("newstext").innerHTML = "Welcome to Car Rampage and thanks for checking us out. Head over to the downloads page to grab this game. Want to know more about the devs or the game? check out the about page.";
    }
    if(sldindex == 2)
    {
        document.getElementById("newsheader").innerHTML = "Tire Marks image!";
        document.getElementById("newstext").innerHTML = "this is the text that goes along with the tire marks image. change this image with relevant news, probably have atleast 3 elements to scroll through";
    }
}