import Tree from "./tree";

const newTree = new Tree([2, 7, 4, 5, 1, 3, 8, 6]);

const builtTree = newTree.buildTree();

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
prettyPrint(builtTree);
console.log();
console.log();
console.log();