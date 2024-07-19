document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOMContentLoaded event fired.");

    const twitterButton = document.getElementById('twitterButton');
    const linkedinButton = document.getElementById('linkedinButton');
    const githubButton = document.getElementById('githubButton');
    const instagramButton = document.getElementById('instagramButton');
    const facebookButton = document.getElementById('facebookButton');

    if (twitterButton) {
        twitterButton.addEventListener('click', () => {
            window.open('https://twitter.com/Bradtab05', '_blank');
        });
    } 

    if (linkedinButton) {
        linkedinButton.addEventListener('click', () => {
            window.open('https://linkedin.com/in/bradley-tabone-68665231a', '_blank');
        });
    }
    
    if (githubButton) {
        githubButton.addEventListener('click', () => {
            window.open('https://github.com/bradtab', '_blank');
        });
    } 

    if (instagramButton) {
        instagramButton.addEventListener('click', () => {
            window.open('https://instagram.com/bradleytabone_13', '_blank');
        });
    } 

    if (facebookButton) {
        facebookButton.addEventListener('click', () => {
            window.open('https://facebook.com/bradley.tabone.5', '_blank');
        });
    } 
});
