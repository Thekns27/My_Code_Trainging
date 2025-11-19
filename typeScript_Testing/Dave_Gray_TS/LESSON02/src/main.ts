//terminology: typescript
let myName: string= 'Dave'
let meaningoflife : number;
let isloading : boolean;
let album:any;


myName = 'Dave'
meaningoflife = 42
isloading = true;
album = 'Van Halen' //(any = all datatype assigned)

const sum = (a: number ,b: number) => {
    return a + b;
}

let postId: string | number
let isActive : number | boolean

let re: RegExp = /\w+/g