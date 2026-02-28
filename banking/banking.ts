interface Account {
  name: string;
  amount: number;
}

interface ScheduledDeposit {
  account: string;
  amount: number;
  timestamp: number;
}

export class Bank {
  private accounts: Record<Account["name"], Account["amount"]> = {};
  private scheduledDeposits: ScheduledDeposit[] = [];

  constructor() {}

  private validAccountExists(accountName: string) {
    if (this.accounts[accountName] !== undefined) {
      return true;
    }
    return false;
  }

  private checkInitialAmount(initialAmount: number) {
    if (initialAmount < 0 || !Number.isInteger(initialAmount)) {
      return false;
    } else {
      return true;
    }
  }

  private checkTransactionAmount(transactionAmount: number) {
    if (transactionAmount <= 0 || !Number.isInteger(transactionAmount)) {
      return false;
    }

    return true;
  }

  processScheduledDeposits(timestamp: number) {
    if (!this.checkInitialAmount(timestamp)) {
      throw new Error(`${timestamp} is not a valid process time`);
    }

    const eligible = this.scheduledDeposits
      .filter((d) => d.timestamp <= timestamp)
      .slice()
      .sort((a, b) => a.timestamp - b.timestamp);

    for (const d of eligible) {
      this.accounts[d.account] = this.accounts[d.account] + d.amount;
    }

    this.scheduledDeposits = this.scheduledDeposits.filter(
      (d) => d.timestamp > timestamp,
    );

    return eligible.length;
  }

  scheduleDeposit(account: string, amount: number, timestamp: number) {
    if (!this.validAccountExists(account)) {
      throw new Error(`Account: ${account} does not exist`);
    }
    if (!this.checkTransactionAmount(amount)) {
      throw new Error(`${amount} is not a valid submission`);
    }

    if (!this.checkInitialAmount(timestamp)) {
      throw new Error(`${timestamp} is not a valid schedule time`);
    }

    if (this.scheduledDeposits.length === 5) {
      throw new Error(
        "You already have 5 scheduled deposits. Process them prior to scheduling more.",
      );
    }

    this.scheduledDeposits.push({ account, amount, timestamp });
  }

  transfer(fromAccount: string, toAccount: string, transactionAmount: number) {
    if (!this.checkTransactionAmount(transactionAmount)) {
      throw new Error(`Must specify a valid tranfer amount.`);
    }
    if (fromAccount === toAccount) {
      throw new Error(
        `Cannot transfer using the same account, ${fromAccount}. Specify another account to trasfer from or to.`,
      );
    }
    if (
      !this.validAccountExists(fromAccount) ||
      !this.validAccountExists(toAccount)
    ) {
      throw new Error(
        `Either ${fromAccount} or ${toAccount} does not exist. Check your transfer settings`,
      );
    }

    if (this.accounts[fromAccount] < transactionAmount) {
      return false;
    }

    this.accounts[fromAccount] = this.accounts[fromAccount] - transactionAmount;
    this.accounts[toAccount] = this.accounts[toAccount] + transactionAmount;

    return true;
  }

  createAccount(accountName: string, initialAmount: number) {
    if (this.validAccountExists(accountName)) {
      throw new Error(
        `Cannot create an account for ${accountName} as it already exists.`,
      );
    }

    if (!this.checkInitialAmount(initialAmount)) {
      throw new Error(`Cannot create an account with a negative balance.`);
    }

    this.accounts = {
      ...this.accounts,
      [accountName]: initialAmount,
    };
  }

  withdraw(accountName: string, amountToWithdraw: number) {
    if (this.accounts[accountName] === undefined) {
      throw new Error(`${accountName} does not exist`);
    }
    if (!this.checkTransactionAmount(amountToWithdraw)) {
      throw new Error(
        "Amount must be greater than 0 and must be a whole number.",
      );
    }
    if (this.accounts[accountName] - amountToWithdraw < 0) {
      throw new Error("Insufficient balance for withdraw");
    }
    this.accounts[accountName] = this.accounts[accountName] - amountToWithdraw;
  }

  deposit(accountName: string, amountToAdd: number) {
    if (this.accounts[accountName] === undefined) {
      throw new Error(
        `Cannot update balance for ${accountName} as it does not exist.`,
      );
    }
    if (!this.checkTransactionAmount(amountToAdd)) {
      throw new Error(
        "Amount must be greater than 0 and must be a whole number.",
      );
    }
    this.accounts[accountName] = this.accounts[accountName] + amountToAdd;
  }

  getBalance(accountName: string) {
    if (this.accounts[accountName] === undefined) {
      throw new Error(`Account ${accountName} does not exist`);
    }
    return this.accounts[accountName];
  }

  getTotalHoldings() {
    let total = 0;

    Object.entries(this.accounts).forEach(([key, value]) => {
      total += value;
    });

    return total;
  }
}
