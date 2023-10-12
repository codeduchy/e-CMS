import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function RootPage() {
  return (
    <div className="p-4">
      Home
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
