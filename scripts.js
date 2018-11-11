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
    document.documentElement.scrollTop = 0;
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
//change the news text when scrolling through the slides
function NewsText() {
    if(sldindex == 1)
    {
        document.getElementById("newsheader").innerHTML = "Welcome to Car Rampage!";
        document.getElementById("newstext").innerHTML = "Welcome to Car Rampage and thanks for checking us out. Head over to the downloads page to grab this game. Want to know more about the devs or the game? check out the about page.";
    }
    if(sldindex == 2)
    {
        document.getElementById("newsheader").innerHTML = "New playable vehicle incoming";
        document.getElementById("newstext").innerHTML = "We are proud to announce that Osiris Studios has been working on releasing a new playable vehicle. 'Dep' will go live November 2019 along with a new level! Follow us on facebook to keep in the loop.";
    }
    if(sldindex == 3)
    {
        document.getElementById("newsheader").innerHTML = "Coming soon, Hex-Core!";
        document.getElementById("newstext").innerHTML = "Inspired by the classic arcade game Arknoid, Hex-Core is a head-to-head winner takes all arcade style game. Featuring an amazing sountrack and acheivements, this game will keep you playing for hours.";
    }
}
//onload function for each page
function IndexLoad() {
    document.getElementById("homenav").style.borderBottom = "medium solid yellow";
}
function MediaLoad() {
    document.getElementById("medianav").style.borderBottom = "medium solid yellow";
}
function AboutLoad() {
    document.getElementById("aboutnav").style.borderBottom = "medium solid yellow";
}
function CarsLoad() {
    document.getElementById("carsnav").style.borderBottom = "medium solid yellow";
}
function DownloadsLoad() {
    document.getElementById("downloadsnav").style.borderBottom = "medium solid yellow";
}
function SupportLoad() {
    document.getElementById("supportnav").style.borderBottom = "medium solid yellow";
}