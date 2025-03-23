const dataSite = {
    proSoft: [
        "Firewall",
        "Antivirus",
        "VPN"
    ],
    whyUs: [
        "High quality",
        "Reliable",
        "Fast"
    ]
};

const displaySortedProSoft = () => {
    const sortedProSoft = dataSite.proSoft.sort();
    const listContainer = document.querySelector('.prof-soft-list');
    if (listContainer) {
        listContainer.innerHTML = sortedProSoft.map((item, index) => `<li class="prof-soft-item">${index + 1}. ${item}</li>`).join('');
    }
};

window.addEventListener("load", displaySortedProSoft);
