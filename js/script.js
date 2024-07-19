document.addEventListener('DOMContentLoaded', () => {//buttons
    document.getElementById('twitterButton').addEventListener('click', () => {
        window.open('https://twitter.com', '_blank');
    });

    document.getElementById('linkedinButton').addEventListener('click', () => {
        window.open('https://linkedin.com', '_blank');
    });

    document.getElementById('githubButton').addEventListener('click', () => {
        window.open('https://github.com', '_blank');
    });
});