import TopCard from "./ui/top-card";
import SubCard from "./ui/sub-card";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: points } = await supabase
    .from("points")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const { data } = await supabase
    .from("quizzes")
    .select("*")
    .order("end_date", { ascending: false })
    .limit(3);

  const quizzes =
    data?.map((quiz) => ({
      ...quiz,
      title: Array.isArray(quiz.title) ? quiz.title[0] : quiz.title,
      end_date: Array.isArray(quiz.end_date) ? quiz.end_date[0] : quiz.end_date,
    })) ?? [];

  const { data: bets } = await supabase
    .from("bets")
    .select("point")
    .eq("user_id", users.id);

  let totalBets = 0;
  bets.map((bet) => {
    totalBets += bet.point;
  });

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-100">
      <div className=" w-full mt-16 mx-4 py-2 px-6 text-sm">
        <p className="pl-6 mb-2">こんにちは、{users.name}さん!!</p>
        <div className="flex justify-between items-center bg-white rounded-full py-1 px-6">
          <p>
            保有ポイント:
            {points.total_points - totalBets}
          </p>
          <Link
            href="/presents"
            className="text-xs border border-b border-t-0 border-r-0 border-l-0 border-gray-500"
          >
            ポイントを使う
          </Link>
        </div>
      </div>
      <TopCard quizzes={quizzes} />
      <div className="flex flex-col justify-around items-center w-full pt-6">
        <p className="text-sm font-medium pb-1 px-1 border-dashed border-b border-t-0 border-r-0 border-l-0 border-black">
          ONGOING
        </p>
        <p className="flex justify-center text-xl font-medium w-full pt-4 pb-6">
          現在開催中の問題
        </p>
      </div>
      <SubCard quizzes={quizzes} />
      <Link
        href="/quiz"
        className="flex justify-center items-center bg-green-700 text-white py-4 px-6 rounded-md my-4 w-3/5"
      >
        もっとみる
      </Link>
    </main>
  );
}
