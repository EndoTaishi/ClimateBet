import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LogoutButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      return;
    }

    return redirect("/login");
  };

  return user ? (
    <form action={signOut}>
      <button className="text-gray-600 text-xs">ログアウト</button>
    </form>
  ) : (
    <button className="text-gray-600 text-xs rounded-full px-4 py-2 bg-green-300">
      <a href="/login" className="text-sm text-black font-bold">登録</a>
    </button>
  );
}
