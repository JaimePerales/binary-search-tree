import Node from "./node";

class Tree {
    constructor(sortedArray) {
        this.root = null;
        // Removes Duplicates by converting array to set and back to array then sorts array
        this.array = [...new Set(sortedArray)].sort();
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


}

export default Tree