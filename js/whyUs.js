const displaySortedWhyUs = () => {
    const sortedWhyUs = dataSite.whyUs.sort();
    const listContainer = document.querySelector('.list1');
    if (listContainer) {
        listContainer.innerHTML = sortedWhyUs.map(item => `<li><a href="#">${item}</a></li>`).join('');
    }
};

window.addEventListener("load", displaySortedWhyUs);