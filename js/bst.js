class BstDOM {
    highlightValue(value, animationName, duration) {
        const nodes = this.bstContainer.querySelectorAll('.node');
        nodes.forEach(node => {
            if (node.textContent === value.toString()) {
                node.style.animation = `${animationName} ${duration}s`;
                setTimeout(() => {
                    node.style.animation = '';
                }, duration * 1000);
            }
        });
        return value;
    }

    newNodeElement(value) {
        const elem = document.createElement('div');
        elem.classList.add('row');
        elem.innerHTML = `<div class="node">${value}</div>`;
        return elem;
    }

    updateDOM() {
        this.bstContainer.innerHTML = '';
        this.buildTreeDOM(this.root, this.bstContainer);
    }

    buildTreeDOM(node, parentElement) {
        if (node !== null) {
            const container = document.createElement('section');
            container.classList.add('bst-container');
            const row = this.newNodeElement(node.data);
            container.appendChild(row);
            if (node.left !== null) {
                const leftDiv = document.createElement('div');
                leftDiv.classList.add('left');
                container.appendChild(leftDiv);
                this.buildTreeDOM(node.left, leftDiv);
            }
            if (node.right !== null) {
                const rightDiv = document.createElement('div');
                rightDiv.classList.add('right');
                container.appendChild(rightDiv);
                this.buildTreeDOM(node.right, rightDiv);
            }
            parentElement.appendChild(container);
        }
    }
}

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST extends BstDOM {
    constructor() {
        super();
        this.root = null;
        this.size = 0;
        this.bstContainer = document.querySelector('section.bst-container');
    }

    clear() {
        this.root = null;
        this.size = 0;
        this.bstContainer.innerHTML = '';
    }

    contains(value) {
        return this.containsNode(this.root, value);
    }

    containsNode(current, value) {
        if (current === null) {
            return false;
        } else if (current.data === value) {
            return true;
        } else if (current.data < value) {
            return this.containsNode(current.right, value);
        } else {
            return this.containsNode(current.left, value);
        }
    }

    print() {
        this.printNode(this.root);
        console.log();
    }

    printNode(current) {
        if (current !== null) {
            this.printNode(current.left);
            console.log(current.data);
            this.printNode(current.right);
        }
    }

    async inOrder(root) {
        if (root !== null) {
            await this.inOrder(root.left);
            this.highlightValue(root.data, 'inOrderAnimation', 2);
            await this.wait(2000);
            await this.inOrder(root.right);
        }
    }

    async preOrder(root) {
        if (root !== null) {
            this.highlightValue(root.data, 'preOrderAnimation', 2);
            await this.wait(2000);
            await this.preOrder(root.left);
            await this.preOrder(root.right);
        }
    }

    async postOrder(root) {
        if (root !== null) {
            await this.postOrder(root.left);
            await this.postOrder(root.right);
            this.highlightValue(root.data, 'postOrderAnimation', 2);
            await this.wait(2000);
        }
    }

    // async away timer method
    async wait(duration) {
        return new Promise(resolve => setTimeout(resolve, duration));
    }

    add(value) {
        this.root = this.addNode(this.root, value);
        this.size++;
        this.updateDOM();
    }

    addNode(root, value) {
        if (root === null) {
            return new Node(value);
        } else if (value < root.data) {
            root.left = this.addNode(root.left, value);
        } else if (value > root.data) {
            root.right = this.addNode(root.right, value);
        }
        return root;
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
        this.updateDOM();
    }

    removeNode(current, value) {
        if (current === null) {
            return null;
        }
        if (value < current.data) {
            current.left = this.removeNode(current.left, value);
        } else if (value > current.data) {
            current.right = this.removeNode(current.right, value);
        } else {
            if (this.isLeaf(current)) {
                return null;
            }
            if (current.left === null) {
                return current.right;
            } else if (current.right === null) {
                return current.left;
            } else {
                const maxNode = this.findMaxValueNode(current.left);
                current.data = maxNode.data;
                current.left = this.removeNode(current.left, maxNode.data);
            }
        }
        return current;
    }

    findMaxValueNode(node) {
        if (node === null) {
            return null;
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    isLeaf(node) {
        return node.left === null && node.right === null;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSmallestValue() {
        const smallest = this.smallestValue(this.root);
        return this.highlightValue(smallest, 'colorMin', 2);
    }

    smallestValue(current) {
        if (current === null) {
            throw new Error('No Such Element Exception');
        } else if (current.left !== null) {
            return this.smallestValue(current.left);
        } else {
            return current.data;
        }
    }

    getLargestValue() {
        const largest = this.largestValue(this.root);
        return this.highlightValue(largest, 'colorMax', 2);
    }

    largestValue(current) {
        if (current === null) {
            return null;
        } else if (current.right !== null) {
            return this.largestValue(current.right);
        } else {
            return current.data;
        }
    }
}

export { Node, BST };