import { TreeNode } from "../../treeNodeClass";

export function preOrder(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  return [root.val, ...preOrder(root.left), ...preOrder(root.right)];
}
