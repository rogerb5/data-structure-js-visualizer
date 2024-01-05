import { Node, BST } from "./bst.js";

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

// Test the print method
console.log("Original BST:");
bst.print();

// Test the printPreOrder method
console.log("Preorder Traversal:");
bst.printPreorder();

// Test the printInOrder method
console.log("Inorder Traversal:");
bst.printInOrder();

// Test the postOrder method
console.log("PostOrder Traversal:");
bst.printPostOrder();