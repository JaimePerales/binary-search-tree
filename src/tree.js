/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import Node from "./node";

function test(node) {

    return node.data;
}

class Tree {
    constructor(sortedArray) {
        this.root = null;
        // Removes Duplicates by converting array to set and back to array then sorts array
        this.array = [...new Set(sortedArray)].sort(((a, b) => a - b));
    }

    buildTree(start = 0, end = this.array.length - 1) {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const newNode = new Node(this.array[mid]);
        newNode.leftChild = this.buildTree(start, mid - 1);
        newNode.rightChild = this.buildTree(mid + 1, end);
        return newNode;
    }

    insert(value, root = this.root) {
        const tree = root;
        if (tree == null) {
            return new Node(value);
        }


        if (tree.data === value) {

            return tree;
        }

        if (tree.data > value) {
            tree.leftChild = this.insert(value, tree.leftChild);
        } else if (root.data < value) {
            tree.rightChild = this.insert(value, tree.rightChild)
        }

        return tree;

    }


    findParentNode(node, root = this.root) {
        if (this.root === null) {
            return null
        }

        if (node === this.root.data) {
            return ("No Parent!")
        }
        if (root === null) {
            return null
        }
        if ((root.leftChild && root.leftChild.data === node) || (root.rightChild && root.rightChild.data === node)) {
            return root;
        }

        if (node < root.data) {
            return this.findParentNode(node, root.leftChild);
        }
        if (node > root.data) {
            return this.findParentNode(node, root.rightChild)
        }

        return null;

    }


    delete(value, root = this.root) {
        if (!root) {
            return null;
        }

        if (value === root.data) {
            if (!root.leftChild && !root.rightChild) return null;

            if (!root.leftChild) return root.rightChild;

            if (!root.rightChild) return root.leftChild;


            let temp = root.rightChild;

            while (temp.leftChild) {
                temp = temp.leftChild;
            }

            root.data = temp.data;
            root.rightChild = this.delete(temp.data, root.rightChild);
        }
        if (value < root.data) {
            root.leftChild = this.delete(value, root.leftChild);
            return root;
        }
        if (value > root.data) {
            root.rightChild = this.delete(value, root.rightChild);
            return root;
        }
    }

    find(value, node = this.root) {
        if (node === null) {
            return null
        }
        if (value < node.data) {
            return this.find(value, node.leftChild)
        }
        if (value > node.data) {
            return this.find(value, node.rightChild);
        }
        return node;
    }



    levelOrder(node = this.root, functionToRun = test) {
        const resultArray = [];
        const queue = [node];

        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode) {
                resultArray.push(functionToRun(currentNode));
                queue.push(currentNode.leftChild);
                queue.push(currentNode.rightChild);
            }

        }
        return resultArray
    }

    inOrder(node = this.root, resultArray = [], functionToRun = test) {

        if (node) {
            if (node.leftChild) {
                this.inOrder(node.leftChild, resultArray);
            }
            resultArray.push(functionToRun(node));
            if (node.rightChild) {
                this.inOrder(node.rightChild, resultArray);
            }
        }
        return resultArray;

    }

    preOrder(node = this.root, resultArray = [], functionToRun = test) {

        if (node) {
            resultArray.push(functionToRun(node));

            if (node.leftChild) {
                this.preOrder(node.leftChild, resultArray);
            }
            if (node.rightChild) {
                this.preOrder(node.rightChild, resultArray);
            }
        }
        return resultArray;

    }

    postOrder(node = this.root, resultArray = [], functionToRun = test) {

        if (node) {


            if (node.leftChild) {
                this.postOrder(node.leftChild, resultArray);
            }
            if (node.rightChild) {
                this.postOrder(node.rightChild, resultArray);
            }

            resultArray.push(functionToRun(node));
        }
        return resultArray;

    }


}




export default Tree