import { TreeNode } from "../../treeNodeClass";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function depth(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    const pathLength = leftDepth + rightDepth;

    if (pathLength > maxDiameter) {
      maxDiameter = pathLength;
    }

    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return maxDiameter;
}
