import { TreeNode } from "../../treeNodeClass";

export function inOrder(root: TreeNode | null): number[] {
  if (!root) return [];

  return [...inOrder(root.left), root.val, ...inOrder(root.right)];
}
