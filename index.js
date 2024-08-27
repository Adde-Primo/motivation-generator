const btn = document.getElementById("btn");
const adviceId = document.getElementById("advice-text");
const motivationTextElement = document.getElementById("motivation-text")



const generateMotivationText = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const motivation = data.slip.advice;
    motivationTextElement.textContent = `"${motivation}"`;
    
    const adviceText = data.slip.id;
    adviceId.textContent = `ADVICE #${adviceText}`
};

btn.addEventListener('click', generateMotivationText);