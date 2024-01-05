import { Node, BST } from "./bst.js";
const bst = new BST();

// Test the add method
bst.add(5);
bst.add(1);
bst.add(7);
bst.add(2);
bst.add(6);
bst.add(8);

// Test the print method
console.log("Original BST:");
bst.print();

// Test the contains method
console.log("Contains 2:", bst.contains(2));
console.log("Contains 1:", bst.contains(1));
console.log("Contains 10:", bst.contains(10));

// Test the smallestValue method
console.log("Smallest value:", bst.getSmallestValue());
console.log("Size before removing nodes:", bst.getSize());

// Test the remove method
bst.remove(2);
bst.remove(1);

// Test the print method after removing nodes
console.log("BST after removing nodes with values 2 and 1");
bst.print();

// Test the size method
console.log("Size after removing nodes:", bst.getSize());

// Test the isEmpty method
console.log("Is Empty:", bst.isEmpty()); // Should be false

// Test removing all nodes
bst.remove(5);
bst.remove(7);
bst.remove(6);
bst.remove(8);

// Test the print method after removing all nodes
console.log("BST after removing all nodes:");
bst.print();

// Test the size and isEmpty after removing all nodes
console.log("Size after removing all nodes:", bst.getSize()); // Should be 0
console.log("Is Empty:", bst.isEmpty()); // Should be true