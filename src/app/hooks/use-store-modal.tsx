"use client";
import { create } from "zustand";

import { UseStoreModalStoreInterface } from "@/lib/interfaces";

export const useStoreModal = create<UseStoreModalStoreInterface>((set) => ({
    isOpen: false,
    OnOpen: () => set({isOpen: true}),
    OnClose: () => set({isOpen: false}),
}))