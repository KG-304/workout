import { TreeNode } from "../../treeNodeClass";
import { diameterOfBinaryTree } from "./calculate_tree_diameter";

export function buildSimpleTree(): TreeNode {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  return root;
}

describe("diameterOfBinaryTree", () => {
  it("returns correct diameter for a basic tree", () => {
    const tree = buildSimpleTree();
    expect(diameterOfBinaryTree(tree)).toBe(3);
  });

  it("returns 0 for single node", () => {
    const root = new TreeNode(42);

    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  it("returns correct diameter for skewed tree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);

    expect(diameterOfBinaryTree(root)).toBe(3);
  });
});
