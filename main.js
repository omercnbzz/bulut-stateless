const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const readTime = document.getElementById('readTime');
const clearBtn = document.getElementById('clearBtn');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    

    charCount.innerText = text.length;
    

    const words = text ? text.split(/\s+/).length : 0;
    wordCount.innerText = words;
    

    const time = Math.ceil(words / 200);
    readTime.innerText = `${time} dk`;
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    charCount.innerText = '0';
    wordCount.innerText = '0';
    readTime.innerText = '0 dk';
});