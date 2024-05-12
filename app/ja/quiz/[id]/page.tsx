import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import BetButton from "@/app/ja/ui/quiz/bet-button";
import { redirect } from "next/navigation";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/ja/login");
  }

  const { data: quiz } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", params.id)
    .single();

  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("id", user?.id)
    .single();

  const { data: points } = await supabase
    .from("points")
    .select("*")
    .eq("user_id", user?.id)
    .single();

  const { data: bets } = await supabase
    .from("bets")
    .select("*")
    .eq("user_id", users.id);

  let totalBets = 0;
  bets?.map((bet) => {
    totalBets += bet.point;
  });

  const { data: thisQuizBet } = await supabase
    .from("bets")
    .select("*")
    .eq("user_id", users.id)
    .eq("quiz_id", quiz.id)
    .single();

  const betPoint = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    const option = formData.get("option");
    const betPointStr = formData.get("betAmount");
    const betPoint = parseInt(betPointStr as string, 10);
    if (isNaN(betPoint) || betPoint <= 0) {
      return redirect(
        `/ja/quiz/${params.id}?message=your bet amount is under zero`,
      );
    }
    const holdingPoints = points!.total_points - totalBets;
    if (betPoint > holdingPoints) {
      return redirect(`/ja/quiz/${params.id}?message=Check your bet amount`);
    }

    if (bets) {
      await supabase
        .from("bets")
        .update({
          point: betPoint,
          option: option,
        })
        .eq("user_id", users.id)
        .eq("quiz_id", quiz.id);

      return redirect("/ja/top?message=your bet is updated!");
    } else {
      await supabase.from("bets").insert({
        user_id: users.id,
        quiz_id: quiz.id,
        option: option,
        point: betPoint,
      });
    }

    return redirect("/ja/top?message=You betted!");
  };

  const { data: result } = await supabase
    .from("results")
    .select("*")
    .eq("quiz_id", params.id)
    .single();

  const now = new Date();

  return (
    <main className="flexfflex-col jsutify-center items-center min-h-screen w-full bg-gray-100">
      <div className="mt-16">
        {searchParams?.message === "Check your bet amount" && (
          <div className="flex justify-center items-center bg-red-500">
            <p className="text-sm font-bold p-4 text-white">
              賭けたポイントが保有ポイントを超えています！
              <br />
              もう一度挑戦してください。
            </p>
          </div>
        )}
        {searchParams?.message === "your bet amount is under zero" && (
          <div className="flex justify-center items-center bg-red-500">
            <p className="text-sm font-bold p-4 text-white">
              0より大きいポイントを使ってください！
            </p>
          </div>
        )}
        <Image
          src="/IMG_2607.jpg"
          width={500}
          height={500}
          alt="Picture of forest"
          priority={true}
          className="object-cover aspect-[4/3] w-full"
        />
        <div className="my-6 px-3">
          <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
          <p className="text-sm text-gray-700 mb-2">
            期限：{quiz.end_date}まで
          </p>
          <p className="w-20 border border-solid border-black py-1 px-2 rounded-full text-xs flex items-center justify-center mb-2">
            解説
          </p>
          <p>{quiz.description}</p>
        </div>
        <div className="flex justify-center">
          {thisQuizBet?.option ? (
            <p className="mb-4 p-4 bg-gray-500 font-bold text-white">
              あなたは今『{thisQuizBet.option}』に{thisQuizBet.point}
              ポイント分をベットしています！
            </p>
          ) : (
            <p className="flex justify-center mb-2">
              持っているポイントをベットしてみよう！
            </p>
          )}
        </div>
      </div>
      {new Date(quiz.end_date) > now ? (
        <form
          action={betPoint}
          className="flex flex-col justify-center items-center"
        >
          <BetButton />
          <button
            type="submit"
            className="text-xl font-bold bg-green-700 text-white py-4 px-6 rounded-md my-4 w-3/5"
          >
            {thisQuizBet.point === 0 ? <p>これでベット！</p> : <p>更新する</p>}
          </button>
        </form>
      ) : thisQuizBet?.point ? (
        <div className="flex flex-col justify-center items-center">
          <p className="px-2 border-t-0 border-r-0 border-l-0 border-b-2 border-yellow-500">
            あなたは{thisQuizBet.point * quiz.yes_odd}ポイントを獲得しました！
          </p>
          <p className="flex justify-center items-center text-xl font-bold bg-[brown] text-white py-4 px-6 rounded-md my-4 w-3/5">
            終了しました
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p className="flex justify-center items-center text-xl font-bold bg-[brown] text-white py-4 px-6 rounded-md my-4 w-3/5">
            終了しました
          </p>
        </div>
      )}
    </main>
  );
}
