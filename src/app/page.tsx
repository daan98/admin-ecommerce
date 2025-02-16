"use client";

import Modal from "@/components/utils/Modal";
import { useStoreModal } from "./hooks/use-store-modal";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((state) => state.OnOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-y-3">
      Home Page
    </div>
  );
}
