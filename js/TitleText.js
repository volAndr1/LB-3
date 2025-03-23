function updateTitleText() {
    const titleElement = document.querySelector('.tittle');
    if (titleElement) {
        titleElement.innerHTML = titleElement.innerHTML.replace('Best<span>Soft</span>', 'Best <span>Professional Soft</span>');
    }
}

window.addEventListener("load", updateTitleText);
