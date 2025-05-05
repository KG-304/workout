import { TreeNode } from "../../treeNodeClass";
import { postOrder } from "./post_order_recursive";

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
  it("returns a simply built tree in post-order form", () => {
    const tree = buildSimpleTree();

    expect(postOrder(tree)).toEqual([7, 15, 12, 4, 9]);
  });
});
