const messages = [
    "TYPE 'HELP' FOR COMMANDS",
    "CONNECTING TO MAINFRAME...",
    "ACCESS GRANTED",
    "RUNNING DIAGNOSTICS",
    "SYSTEM READY"
];

const typedText = document.getElementById('typed-text');
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentMessage = messages[messageIndex];

    if (isDeleting) {
        typedText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedText.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        typingSpeed = 1500; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typingSpeed = 500; 
    }

    setTimeout(typeText, typingSpeed);
}

// Adiciona flicker aleatório
function randomFlicker() {
    const crt = document.querySelector('.crt-screen');
    const intensity = Math.random() * 0.2 + 0.8; // varia entre 0.8 e 1.0
    crt.style.opacity = intensity;

    setTimeout(randomFlicker, Math.random() * 3000 + 1000);
}


setTimeout(typeText, 1000);
setTimeout(randomFlicker, 500);


document.querySelector('.crt-screen').style.transform = 'perspective(3000px) rotateX(2deg)';



