let xs = window.matchMedia("(min-width: 576px)")

function responsiveTitle(pageWidth) {
    let title = document.getElementById("title");
    let bannerImg = document.getElementById("bannerImg");
    if(pageWidth.matches) {
        title.textContent = "Thomas Jones BSc LCHE - Classical Homeopath";
        bannerImg.src = "assets/images/homeopathy-montage--large.png";
        // bannerImg.src = "assets/images/homeopathy_montage_290520-5.png";
    } else {
        title.textContent = "Thomas Jones - Homeopath";
        bannerImg.src = "assets/images/homeopathy-montage--small.png";
    }
}

// document.addEventListener('DOMcontentloaded', function(){
// document.addEventListener('resize', function(){
    responsiveTitle(xs);
    xs.addListener(responsiveTitle);
// }, false)

// document.addEventListener('resize', function() {
//     responsiveTitle(xs, title);
// }, false);