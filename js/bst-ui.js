import { BST } from "./bst.js";

const bst = new BST();
const addNodeBtn = document.querySelector('button.insert-btn');
const addInput = document.querySelector('input.insert-input');
const deleteNodeBtn = document.querySelector('button.delete-btn');
const deleteInput = document.querySelector('input.delete-input');
const searchNodeBtn = document.querySelector('button.search-btn');
const searchInput = document.querySelector('input.search-input');
const searchMinBtn = document.querySelector('button.searchmin-node-btn');
const searchMaxBtn = document.querySelector('button.searchmax-node-btn');
const inordertraversalBtn = document.querySelector('.inorder-node-btn');
const postordertraversalBtn = document.querySelector('.postorder-node-btn');
const preordertraversalBtn = document.querySelector('.preorder-node-btn');
const cleartreeBtn = document.querySelector('.clear-btn');
const alertMessage = document.querySelector('article.alert');
const aboutBtn = document.querySelector('button.about-btn');
const closeBtn = document.querySelector('button.close-btn');
const modal = document.querySelector('section.modal');

aboutBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});


addNodeBtn.addEventListener('click', () => {
    const addInputNumericValue = parseInt(addInput.value);
    if (isValidInput(addInputNumericValue)) {
        bst.add(addInputNumericValue);
        alertMessage.classList.remove('active');
    } else {
        alertMessage.classList.add('active');
    }
    addInput.value = '';
});

deleteNodeBtn.addEventListener('click', () => {
    const deleteInputValue = parseInt(deleteInput.value);
    if (isValidInput(deleteInputValue)) {
        bst.remove(deleteInputValue);
        alertMessage.classList.remove('active');
    } else {
        alertMessage.classList.add('active');
    }
    deleteInput.value = '';
});

searchNodeBtn.addEventListener('click', () => {
    const searchInputValue = parseInt(searchInput.value);
    const isNodeInTree = bst.contains(searchInputValue);
    if (isNodeInTree) {
        bst.highlightValue(searchInputValue, 'search', 2);
    }
    searchInput.value = '';
});

searchMinBtn.addEventListener('click', () => {
    bst.getSmallestValue();
});

searchMaxBtn.addEventListener('click', () => {
    bst.getLargestValue();
});

cleartreeBtn.addEventListener('click', () => {
    bst.clear();
});

inordertraversalBtn.addEventListener('click', async () => {
    disableButtons();
    await bst.inOrder(bst.root);
    enableButtons();
});

postordertraversalBtn.addEventListener('click', async () => {
    disableButtons();
    await bst.postOrder(bst.root);
    enableButtons();
});

preordertraversalBtn.addEventListener('click', async () => {
    disableButtons();
    await bst.preOrder(bst.root);
    enableButtons();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const addInputNumericValue = parseInt(addInput.value);
        if (isValidInput(addInputNumericValue)) {
            bst.add(addInputNumericValue);
            alertMessage.classList.remove('active');
        } else {
            alertMessage.classList.add('active');
        }
        addInput.value = '';
    }
});

function isValidInput(inputValue) {
    return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
}

function disableButtons() {
    const traversalBtns = document.querySelectorAll('button');
    traversalBtns.forEach(btn => {
        btn.classList.add('disable')
    });
}

function enableButtons() {
    const traversalBtns = document.querySelectorAll('button');
    traversalBtns.forEach(btn => {
        btn.classList.remove('disable')
    });
}
