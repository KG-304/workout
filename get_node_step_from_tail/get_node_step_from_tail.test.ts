import getNode from "./get_node_step_from_tail";

// Define a basic singly linked list node
export class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

// Helper to create a linked list from an array
function buildLinkedList(values: number[]): SinglyLinkedListNode {
  const head = new SinglyLinkedListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new SinglyLinkedListNode(values[i]);
    current = current.next;
  }

  return head;
}

describe("getNode", () => {
  it("returns correct value from position 2 from tail", () => {
    const list = buildLinkedList([0, 1, 2, 3, 4]);
    const result = getNode(list, 2);
    expect(result).toBe(2);
  });

  it("returns correct value from tail (position 0)", () => {
    const list = buildLinkedList([5, 10, 15]);
    const result = getNode(list, 0);
    expect(result).toBe(15);
  });

  it("returns correct value when list has one element and positionFromTail is 0", () => {
    const list = buildLinkedList([99]);
    const result = getNode(list, 0);
    expect(result).toBe(99);
  });

  it("returns correct value from head (position from tail = list.length - 1)", () => {
    const list = buildLinkedList([7, 8, 9, 10]);
    const result = getNode(list, 3);
    expect(result).toBe(7);
  });
});
