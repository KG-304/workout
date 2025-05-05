import { TreeNode } from "../../treeNodeClass";

export function buildTreeFromLevelOrder(
  values: (number | null)[]
): TreeNode | null {
  if (!values.length || values[0] === null) {
    return null;
  }
  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (i < values.length) {
    const current = queue.shift()!;

    const leftVal = values[i];
    i++;
    if (leftVal !== null) {
      const leftNode = new TreeNode(leftVal);
      current.left = leftNode;
      queue.push(leftNode);
    }

    const rightVal = values[i];
    i++;
    if (rightVal !== null) {
      const rightNode = new TreeNode(rightVal);
      current.right = rightNode;
      queue.push(rightNode);
    }
  }

  return root;
}
