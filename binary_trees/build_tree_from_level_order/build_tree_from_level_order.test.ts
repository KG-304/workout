import { TreeNode } from "../../treeNodeClass";
import { buildTreeFromLevelOrder } from "./build_tree_from_level_order";

function inOrder(root: TreeNode | null): number[] {
  if (!root) return [];
  return [...inOrder(root.left), root.val, ...inOrder(root.right)];
}

/* 
        9
       / \
     12   4
     / \
    7   15
*/

describe("buildTreeFromLevelOrder", () => {
  it("builds tree correctly from level-order array", () => {
    const values = [9, 12, 4, 7, 15];
    const root = buildTreeFromLevelOrder(values);

    expect(inOrder(root)).toEqual([7, 12, 15, 9, 4]);
  });

  it("returns null for empty array", () => {
    expect(buildTreeFromLevelOrder([])).toBeNull();
  });

  it("returns null for root as null", () => {
    expect(buildTreeFromLevelOrder([null])).toBeNull();
  });
});
