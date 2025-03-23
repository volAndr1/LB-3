const clearNews = () => {
    const newsContainer = document.querySelector('.col1');
    if (newsContainer) {
        const newsItems = newsContainer.querySelectorAll('.wrapper.pad_bot2, .wrapper:last-child');
        newsItems.forEach(item => item.remove());
    }
};

window.addEventListener("load", clearNews);