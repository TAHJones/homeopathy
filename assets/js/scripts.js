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

responsiveTitle(xs);
xs.addListener(responsiveTitle);
