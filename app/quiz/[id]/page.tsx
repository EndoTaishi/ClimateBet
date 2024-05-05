import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import BetButton from "@/app/ui/quiz/bet-button";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const params_id = params.id;
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: quiz } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", params_id)
    .single();

  const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("id", user?.id)
    .single();

  const betPoint = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    const option = formData.get("option");
    const point = formData.get("betAmount");
    console.log(option, point);
    await supabase.from("bets").insert({
      user_id: users.id,
      quiz_id: quiz.id,
      option: option,
      point: point,
    });

    return redirect("/");
  };

  return (
    <main className="flexfflex-col jsutify-center items-center min-h-screen w-full bg-gray-100">
      <div className="mt-16">
        <Image
          src="/IMG_2607.jpg"
          width={500}
          height={500}
          alt="Picture of forest"
          priority={true}
          className="object-cover aspect-[4/3]"
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
        <div className="flex justify-center text-gray-700 mb-2">
          <p>持っているポイントを賭けてみよう！</p>
        </div>
      </div>
      <form
        action={betPoint}
        className="flex flex-col justify-center items-center"
      >
        <BetButton />
        <button
          type="submit"
          className="text-xl font-bold bg-green-700 text-white py-4 px-6 rounded-md my-4 w-3/5"
        >
          <p>これで賭ける！</p>
        </button>
      </form>
      {/*
                <div className='flex justify-center text-xl font-bold'>
                    <p>終了しました</p>
                </div>
            */}
    </main>
  );
}
