import SubCard from "../ui/sub-card";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase
    .from("quizzes")
    .select("*")
    .order("created_at", { ascending: false });

  const quizzes =
    data?.map((quiz) => ({
      ...quiz,
      title: Array.isArray(quiz.title) ? quiz.title[0] : quiz.title,
      end_date: Array.isArray(quiz.end_date) ? quiz.end_date[0] : quiz.end_date,
    })) ?? [];

  return (
    <>
      <div className="flex flex-col justify-around items-center w-full pt-6 mt-16">
        <p className="text-sm font-medium pb-1 px-1 border-dashed border-b border-t-0 border-r-0 border-l-0 border-black">
          QUIZZES
        </p>
        <h1 className="flex justify-center text-xl font-medium w-full pt-4 pb-6">
          これまでの問題
        </h1>
      </div>
      <SubCard quizzes={quizzes} />
    </>
  );
}
