// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for about section with colors
const aboutText = "Hello! I'm Akash Nayak, a BTech student in Electrical & Electronics Engineering with a strong interest in software development, DSA, and AI. I enjoy building projects, learning new technologies, and improving my problem-solving skills.";
const aboutElement = document.querySelector('#about p');
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe', '#fd79a8', '#00b894'];
let index = 0;

function typeWriter() {
    if (index < aboutText.length) {
        const span = document.createElement('span');
        span.textContent = aboutText.charAt(index);
        span.style.color = colors[index % colors.length];
        span.style.transition = 'color 0.5s';
        aboutElement.appendChild(span);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing when page loads
window.addEventListener('load', () => {
    aboutElement.innerHTML = '';
    typeWriter();
});