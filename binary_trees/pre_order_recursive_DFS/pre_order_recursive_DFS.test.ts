import { TreeNode } from "../../treeNodeClass";
import { preOrder } from "./pre_order_recursive_DFS";
/* 
        9
       / \
     12   4
     / \
    7   15
 */

export function buildSimpleTree(): TreeNode {
  const root = new TreeNode(9);
  root.left = new TreeNode(12);
  root.right = new TreeNode(4);
  root.left.left = new TreeNode(7);
  root.left.right = new TreeNode(15);
  return root;
}

describe("simple recursion", () => {
  it("returns a simply built tree in pre-order form", () => {
    const tree = buildSimpleTree();
    expect(preOrder(tree)).toEqual([9, 12, 7, 15, 4]);
  });
});
