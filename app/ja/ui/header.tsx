import Link from "next/link";
import { OpenSans } from "@/app/ui/fonts";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./logout-button";

export default async function Header() {
  return (
    <header className="flex justify-between items-center fixed z-50 top-0 left-0 h-16 w-full px-4 bg-opacity-90 bg-white">
      <h1 className={`${OpenSans.className} text-3xl font-bold`}>
        <Link href="/top">Climate Bet</Link>
      </h1>
      <LogoutButton />
    </header>
  );
}
