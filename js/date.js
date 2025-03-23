function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    document.querySelector('.date').innerText = `${formattedDate}  ${formattedTime}`;
}

setInterval(updateDateTime, 1000);
window.onload = updateDateTime;