"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-y-3">
      <Button
        className="rounded-xl bg-blue-950 hover:bg-blue-900"
      >
        Click Me!
      </Button>
    </div>
  );
}
