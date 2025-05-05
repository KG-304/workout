import { TreeNode } from "../../treeNodeClass";
import { inOrder } from "./in_order_recursively_iterate_tree";

export function buildSimpleTree(): TreeNode {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  return root;
}

describe("simple recursion", () => {
  it("returns a simply built tree in-order form", () => {
    const tree = buildSimpleTree();
    expect(inOrder(tree)).toEqual([4, 2, 5, 1, 3]);
  });
});
