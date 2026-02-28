export function processEvents(events: string[]) {
  function buildEvents(events: string[]) {
    let eventsToProcess = [];

    for (const todoRecord of events) {
      let builtEventRecord = todoRecord.split(" ");
      eventsToProcess.push(builtEventRecord);
    }

    return eventsToProcess;
  }

  const accounts = new Map<string, number>();
  let whatHappened: string[] = [];

  function churn(events: string[][]) {
    for (const event of events) {
      const currentEvent = {
        type: event[0],
        account_name: event[1],
        amount: Number(event[2] ?? 0),
        to_account: event[3] ?? "",
      };

      switch (currentEvent.type) {
        case "CREATE":
          if (accounts.has(currentEvent.account_name)) {
            whatHappened.push("ERROR");
            break;
          }
          accounts.set(currentEvent.account_name, currentEvent.amount);
          break;
        case "DEPOSIT":
          if (
            !accounts.has(currentEvent.account_name) ||
            currentEvent.amount <= 0
          ) {
            whatHappened.push("ERROR");
            break;
          }

          accounts.set(
            currentEvent.account_name,
            accounts.get(currentEvent.account_name)! + currentEvent.amount,
          );

          break;
        case "BALANCE":
          whatHappened.push(
            accounts.get(currentEvent.account_name)!.toString(),
          );
          break;

        case "WITHDRAW":
          if (
            !accounts.has(currentEvent.account_name) ||
            currentEvent.amount <= 0
          ) {
            whatHappened.push("ERROR");
            break;
          }

          accounts.set(
            currentEvent.account_name,
            accounts.get(currentEvent.account_name)! - currentEvent.amount,
          );

          break;

        case "TRANSFER":
          if (
            !accounts.has(currentEvent.account_name) ||
            !accounts.has(currentEvent.to_account)
          ) {
            whatHappened.push("ERROR");
            break;
          }

          accounts.set(
            currentEvent.account_name,
            accounts.get(currentEvent.account_name)! - currentEvent.amount,
          );

          accounts.set(
            currentEvent.to_account,
            accounts.get(currentEvent.to_account)! + currentEvent.amount,
          );

          break;

        default:
          break;
      }
    }
  }

  const eventsToProcess = buildEvents(events);

  churn(eventsToProcess);

  return whatHappened;
}
