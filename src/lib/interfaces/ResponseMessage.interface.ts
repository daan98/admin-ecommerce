export default interface ResponseMessageInterface {
    status      : number;
    message     : string;
    data        : Array<any> | null;
}