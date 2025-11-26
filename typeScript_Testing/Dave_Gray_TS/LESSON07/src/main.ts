// Index Signatures

interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTannsactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};
console.log(todaysTannsactions.Pizza);
console.log(todaysTannsactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTannsactions[prop as keyof TransactionObj]);
