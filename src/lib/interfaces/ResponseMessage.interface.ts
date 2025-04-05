import UserInterface from "./user.interface";

export default interface ResponseMessageInterface {
    status      : number;
    message     : string;
    data        : Array<UserInterface> | null | any;
}