const xs = window.matchMedia("(min-width: 576px)")
const backToTop = document.getElementById("backToTop");



/**
 * Function that uses matchMedia method. It toggles h2 text content if the current window width matches the CSS media query string parameter or not.
 * @param {string} pageWidth - MediaQueryList object representing the results of the specified CSS media query string.
 */
function responsiveTitle(pageWidth) {
    let title = document.getElementById("title");
    let bannerImg = document.getElementById("bannerImg");
    if(pageWidth.matches) {
        title.textContent = "Thomas Jones BSc LCHE - Classical Homeopath";
        bannerImg.src = "assets/images/homeopathy-montage--large.png";
    } else {
        title.textContent = "Thomas Jones - Homeopath";
        bannerImg.src = "assets/images/homeopathy-montage--small.png";
    }
}


/**
 * Function that uses js date method to get current year and adds it to copyright statement then inserts them into page footer. Uses matchMedia query as parameter to make copyright statement responsve
* @param {string} pageWidth - - MediaQueryList object representing the results of the specified CSS media query string.
*/
function getCurrentYear(pageWidth) {
    const copyRight = document.getElementById("copyRight");
    let copyRightText;
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    if (pageWidth.matches) {
        copyRightText = "2011 - " + year + " © Thomas Jones - All Rights Reserved";
    } else {
        copyRightText = "2011 - " + year + " © Thomas Jones";
    }
    copyRight.innerHTML = copyRightText;
}


/**
 *  CREDIT: code for scrolling button taken from
 *  https://www.w3schools.com/howto/howto_js_scroll_to_top.asp 
 * makes floating button visible once user starts scrolling.
 */
function scrollingButton() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
}


/**
 * topFunction function scrolls back to the top of the page
 */
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/**
 * floatButton function fixes floating button in place on screens larger than 1200px
 * It also unfixes floating button on screens smaller than 1200px
 */
function floatButton() {
    if (window.innerWidth < 576) {
        backToTop.classList.replace("btn-float", "btn-fixed");
        backToTop.classList.add("active");

    } else {
        backToTop.classList.replace("btn-fixed", "btn-float");
    }
}


// eventlisteners
xs.addListener(responsiveTitle);
xs.addListener(getCurrentYear);
window.addEventListener("scroll", scrollingButton, false);
backToTop.addEventListener("click", topFunction, false);
window.addEventListener("resize", floatButton, false);


// function calls
document.addEventListener("DOMContentLoaded", function() {
    responsiveTitle(xs);
    floatButton();
    getCurrentYear(xs);
}, false);
