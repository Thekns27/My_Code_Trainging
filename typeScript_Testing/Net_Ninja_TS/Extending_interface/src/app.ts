//-------------------
//Extending interface
//-------------------

interface HasFormatter {
    format(): string
}

interface Bill extends HasFormatter{
    id: string | number
    amount: number
    server : string
}

const user = {
    id : 1,
    format(): string{
        return `this user has an id of ${this.id}`
    }
}
const bill = {
    id: 2 ,
    amount: 50,
    server:"mario",
    format(): string {
        return`bill with id ${this.id} has ${this.amount} to pay`
    }
}
