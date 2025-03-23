const changeListImage = () => {
    const listItems = document.querySelectorAll("#myRoundabout li img");
    
    listItems.forEach(img => {
        img.src = "images/bg-soft.png";
    });
};

window.addEventListener("load", changeListImage);