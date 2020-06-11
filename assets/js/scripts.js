let xs = window.matchMedia("(min-width: 576px)")

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
 * Function that uses js date method to get current year and adds it to copyright statement then inserts them into page footer.
 */
function getCurrentYear() {
  let copyRightText;
  let currentTime = new Date();
  let year = currentTime.getFullYear();
    copyRightText = "2019 - " + year + " © Thomas Jones - All Rights Reserved";
    return copyRightText;
}


// eventlisteners
xs.addListener(responsiveTitle);

// function calls
document.addEventListener("DOMContentLoaded", responsiveTitle(xs), false);
copyRight.innerHTML = getCurrentYear();