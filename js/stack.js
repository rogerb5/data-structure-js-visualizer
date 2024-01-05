const stackSizeP = document.querySelector('p.size');
const stackIsEmptyP = document.querySelector('p.isempty');
const stackPeekP = document.querySelector('p.peek');
const stackContainer = document.querySelector('article.stack');


class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
        this.peekedItem = null;
    }

    isEmpty() {
        const isEmpty = this.size === 0;
        stackIsEmptyP.textContent = `isEmpty? ${isEmpty}`;
        return isEmpty;
    }

    push(value) {
        const stackItem = document.createElement('div');
        const stackVal = document.createElement('p');
        const indexSpan = document.createElement('span');
        stackItem.classList.add('stack-element');
        stackItem.append(indexSpan);
        stackVal.classList.add('pushed-val');
        stackVal.textContent = value;
        indexSpan.textContent = this.size;
        stackItem.append(stackVal);
        stackContainer.prepend(stackItem);
        this.items.push({ value, element: stackItem });


        stackItem.style.animation = 'pushanimation 0.5s';
        if (this.peekedItem) {
            this.peekedItem.element.classList.remove('peekcolor');
        }
        this.size += 1;
    }

    pop() {
        if (this.size > 0) {
            const { value, element } = this.items.pop();
            element.style.animation = 'popanimation 0.5s';
            setTimeout(() => {
                element.remove();
            }, 500);
            this.size -= 1;
            stackSizeP.textContent = "Size: " + this.size;
            return value;
        } else if (this.size <= 0) {
            stackIsEmptyP.textContent = `isEmpty? true`;
        }

    }

    getSize() {
        stackSizeP.textContent = "Size: " + this.size;
        return this.size;
    }

    peek() {
        if (this.isEmpty()) {
            stackPeekP.textContent = "Peek: NULL";
            return null;
        }
        const peekedItem = this.items[this.size - 1];
        peekedItem.element.classList.add('peekcolor');
        stackPeekP.textContent = "Peek: " + peekedItem.value;
        this.peekedItem = peekedItem;
        return peekedItem.value;
    }

    clear() {
        while (this.size > 0) {
            this.pop();
        }
        stackIsEmptyP.textContent = "isEmpty? true";
        stackSizeP.textContent = "Size: 0";
        stackPeekP.textContent = "Peek: NULL";
    }
}

export { Stack };