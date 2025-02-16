export default interface ModalPropsInterface {
    children        : React.ReactNode;
    description     : string;
    isOpen          : boolean;
    OnClose         : () => void;
    title           : string;
};