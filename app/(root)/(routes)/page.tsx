"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function RootPage() {
  const { onOpen, isOpen } = useStoreModal((state) => state);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
