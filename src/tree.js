/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import Node from "./node";

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

    // Start with deleteing leaf

    // delete(value, root = this.root) {

    //     if (value === this.root.data) {
    //         if (this.root.leftChild === null && this.root.rightChild === null) {
    //             this.root = null;
    //         } else if (this.root.leftChild === null && this.root.rightChild !== null) {
    //             this.root = this.root.rightChild;
    //         } else if (this.root.leftChild !== null && this.root.rightChild === null) {
    //             this.root = this.root.leftChild;
    //         } else {
    //             let lowestValueInRightSubTree = this.root.rightChild;
    //             while (lowestValueInRightSubTree.leftChild) {
    //                 lowestValueInRightSubTree = lowestValueInRightSubTree.leftChild;
    //             }

    //             const temp = new Node(lowestValueInRightSubTree.data);
    //             temp.leftChild = lowestValueInRightSubTree.leftChild;
    //             temp.rightChild = lowestValueInRightSubTree.rightChild;

    //             const lowestValueInRightSubTreeParentNode = this.findParentNode(lowestValueInRightSubTree.data);
    //             lowestValueInRightSubTree.leftChild = this.root.leftChild;
    //             lowestValueInRightSubTree.rightChild = this.root.rightChild;
    //             if (lowestValueInRightSubTreeParentNode.leftChild === lowestValueInRightSubTree) {
    //                 if (temp.rightChild) {
    //                     lowestValueInRightSubTreeParentNode.leftChild = temp.rightChild
    //                 } else {
    //                     lowestValueInRightSubTreeParentNode.leftChild = null;
    //                 }
    //                 this.root = lowestValueInRightSubTree
    //             } else if (lowestValueInRightSubTreeParentNode.rightChild === lowestValueInRightSubTree) {
    //                 lowestValueInRightSubTreeParentNode.rightChild = null;
    //                 this.root = lowestValueInRightSubTree
    //             }

    //         }
    //         return
    //     }
    //     // find node to be deleted and remove its parents reference
    //     const parentNode = (this.findParentNode(value, root));

    //     if (parentNode === null) {
    //         return
    //     }

    //     if (parentNode.leftChild !== null) {
    //         if (parentNode.leftChild.data === value) {
    //             if (parentNode.leftChild.leftChild === null && parentNode.leftChild.rightChild === null) {
    //                 parentNode.leftChild = null;

    //             } else if (parentNode.leftChild.leftChild !== null && parentNode.leftChild.rightChild === null) {
    //                 parentNode.leftChild = parentNode.leftChild.leftChild;
    //             } else if (parentNode.leftChild.leftChild === null && parentNode.leftChild.rightChild !== null) {
    //                 parentNode.leftChild = parentNode.leftChild.rightChild;
    //             } else {
    //                 let lowestValueInRightSubTree = parentNode.leftChild.rightChild;
    //                 while (lowestValueInRightSubTree.leftChild) {
    //                     lowestValueInRightSubTree = lowestValueInRightSubTree.leftChild;
    //                 }

    //                 const lowestValueInRightSubTreeParentNode = this.findParentNode(lowestValueInRightSubTree.data);

    //                 lowestValueInRightSubTree.leftChild = parentNode.leftChild.leftChild;
    //                 lowestValueInRightSubTree.rightChild = parentNode.leftChild.rightChild;
    //                 if (lowestValueInRightSubTreeParentNode.leftChild === lowestValueInRightSubTree) {
    //                     // check if lowest value has right child, if it does set the left 
    //                     lowestValueInRightSubTreeParentNode.leftChild = null;
    //                     parentNode.leftChild = lowestValueInRightSubTree
    //                 } else if (lowestValueInRightSubTreeParentNode.rightChild === lowestValueInRightSubTree) {
    //                     lowestValueInRightSubTreeParentNode.rightChild = null;
    //                     parentNode.leftChild = lowestValueInRightSubTree
    //                 }
    //             }



    //         }
    //     }
    //     if (parentNode.rightChild !== null) {
    //         if (parentNode.rightChild.data === value) {
    //             if (parentNode.rightChild.leftChild === null && parentNode.rightChild.rightChild === null) {
    //                 parentNode.rightChild = null;
    //             } else if (parentNode.rightChild.leftChild !== null && parentNode.rightChild.rightChild === null) {
    //                 parentNode.rightChild = parentNode.rightChild.leftChild;
    //             } else if (parentNode.rightChild.leftChild === null && parentNode.rightChild.rightChild !== null) {
    //                 parentNode.rightChild = parentNode.rightChild.rightChild;
    //             } else {
    //                 let lowestValueInRightSubTree = parentNode.rightChild.rightChild;
    //                 while (lowestValueInRightSubTree.leftChild) {
    //                     lowestValueInRightSubTree = lowestValueInRightSubTree.leftChild;
    //                 }
    //                 const lowestValueInRightSubTreeParentNode = this.findParentNode(lowestValueInRightSubTree.data);
    //                 lowestValueInRightSubTree.leftChild = parentNode.rightChild.leftChild;
    //                 lowestValueInRightSubTree.rightChild = parentNode.rightChild.rightChild;
    //                 if (lowestValueInRightSubTreeParentNode.leftChild === lowestValueInRightSubTree) {
    //                     lowestValueInRightSubTreeParentNode.leftChild = null;
    //                     parentNode.rightChild = lowestValueInRightSubTree
    //                 } else if (lowestValueInRightSubTreeParentNode.rightChild === lowestValueInRightSubTree) {
    //                     lowestValueInRightSubTreeParentNode.rightChild = null;
    //                     parentNode.rightChild = lowestValueInRightSubTree
    //                 }
    //             }



    //         }
    //     }


    // }

    delete(value, root = this.root) {
        if (!root) {
            return null;
        }

        if (value === root.data) {
            if (!root.leftChild && !root.rightChild) {
                return null;
            }
            if (!root.leftChild) {
                return root.rightChild;
            }
            if (!root.rightChild) {


                return root.leftChild;
            }

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

}

export default Tree