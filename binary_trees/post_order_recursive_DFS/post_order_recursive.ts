import { TreeNode } from "../../treeNodeClass";

export function postOrder(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  return [...postOrder(root.left), ...postOrder(root.right), root.val];
}
