import { SinglyLinkedListNode } from "./get_node_step_from_tail.test";

export default function getNode(
  llist: SinglyLinkedListNode,
  positionFromTail: number
) {
  let lead = llist;
  let follow = llist;

  let steps = positionFromTail;

  while (steps > 0) {
    if (lead.next) {
      lead = lead.next;
      steps--;
    }
  }

  while (lead.next !== null) {
    lead = lead.next;
    follow = follow.next!;
  }

  return follow.data;
}
