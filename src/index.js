import Tree from "./tree";

function createRandomArray(arrayLength = 40, maxValue = 40) {
    return Array.from({ length: arrayLength }, () => Math.floor(Math.random() * maxValue));

}
createRandomArray();
const newTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])

newTree.root = newTree.buildTree();

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightChild !== null) {
        prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftChild !== null) {
        prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

}

console.log();
console.log();
console.log();
prettyPrint(newTree.root);
console.log();
console.log();
console.log();

console.log(newTree.inOrder());
console.log(newTree.preOrder());
console.log(newTree.postOrder());