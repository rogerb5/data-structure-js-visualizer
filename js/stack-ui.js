import { Stack } from './stack.js';

const userInput = document.querySelector('input[type="text"]');
const pushBtn = document.querySelector('button.btn-push');
const popBtn = document.querySelector('button.btn-pop');
const clearBtn = document.querySelector('button.btn-clear');
const alertModal = document.querySelector('article.alert');
const aboutBtn = document.querySelector('button.about-btn');
const closeBtn = document.querySelector('button.close-btn');

const modal = document.querySelector('section.modal');
const stack = new Stack();


aboutBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

pushBtn.addEventListener('click', () => {
    processInput();
});

popBtn.addEventListener('click', () => {
    stack.pop();
    stack.isEmpty();
    stack.peek();
});

clearBtn.addEventListener('click', () => {
    stack.clear();
});

function verifyInput() {
    if (isNaN(userInput)) {
        alertModal.classList.add('active');
        setTimeout(() => {
            alertModal.classList.remove('active');
        }, 1000);
        return;
    } else {
        alertModal.classList.remove('active');
    }
    stack.push(userInput);
}

function processInput() {
    const userInputValue = userInput.value.trim();
    if (userInputValue === "") {
        verifyInput();
        userInput.value = '';
    }
    const value = parseInt(userInputValue);
    if (isNaN(value)) {
        return;
    }
    stack.push(value);
    stack.isEmpty();
    stack.getSize();
    stack.peek();
    userInput.value = '';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processInput();
    }
});