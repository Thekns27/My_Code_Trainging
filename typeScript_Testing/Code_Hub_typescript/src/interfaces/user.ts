export interface User {
  name: string;
  readonly email: string;
  phone_number?: number;
  // islogin : () => boolean;
  islogin(): boolean;
  getAge(age: number): number;
}
export interface User {
  isDriving(status: boolean): string;
}
