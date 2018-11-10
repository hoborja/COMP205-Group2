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