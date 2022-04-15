class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }

    addLeft(val) {
        const childNode = new TreeNode(val);
        this.left = childNode;
    }

    addRight(val) {
        const childNode = new TreeNode(val);
        this.right = childNode;
    }
}

const instance = new BinaryTree(2);         // here, root node = 2;
instance.addLeft(7);
instance.addRight(9);
console.log(instance);
