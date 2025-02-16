"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

import { ModalPropsInterface } from "@/lib/interfaces";


export default function Modal({ children, description, isOpen, OnClose, title, } : ModalPropsInterface){
    const OnChange = (open : boolean) => {
        if(!open) {
            OnClose();
        }
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={OnChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{ title }</DialogTitle>
                    <DialogDescription>{ description }</DialogDescription>
                </DialogHeader>

                <div> {children} </div>
            </DialogContent>
        </Dialog>
    )
}