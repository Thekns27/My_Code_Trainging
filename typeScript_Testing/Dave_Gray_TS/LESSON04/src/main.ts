//type Aliases \ Functions
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]
type Guitarist  = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

type UserId = stringOrNumber

//interface PostId = stringOrNumber

// Literal types
let myName : 'Dave'
let userName : 'Dave' | 'John' | 'Any'
userName = 'Any'

// functions
const add = (a:number , b: number):number => {
    return a + b
}

const logMsg = ( message : any): void => {
    console.log(message)
}
logMsg('Hello')
logMsg(add (2,3))

let subtract = function (c: number, d: number): number{
  return c - d
}
type mathFunction = (a: number, b: number) => number

//interface mathFunction {(a: number, b: number):number}

let multiply: mathFunction = function (c , d) {
  return c * d
}

logMsg(multiply(2,2))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

const sumAll = (a: number, b: number, c: number= 2): number => {
    return a + b + c
}


logMsg (addAll (2,3,2))
logMsg (addAll (2,3))
logMsg (sumAll (2,3))
