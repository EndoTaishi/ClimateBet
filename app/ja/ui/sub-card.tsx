import { Database as DB } from "@/types/supabase";
import Link from "next/link";
import Image from "next/image";

type Quiz = DB["public"]["Tables"]["quizzes"]["Row"];

export default function SubCard({ quizzes }: { quizzes: Quiz[] }) {
  const now = new Date();
  const randomEmoji = () => {
    // 表示したい絵文字のリスト
    const emojis = ["🌳", "🪵", "🌿"];
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  };

  return quizzes.map((quiz) => {
    const endDate = new Date(quiz.end_date);

    return (
      <div
        key={quiz.id}
        className="border border-gray-300 m-1 p-1 rounded-md bg-white sm:w-2/3"
      >
        <Link href={`/ja/quiz/${quiz.id}`}>
          <div className="flex justify-between p-2">
            <div className="flex flex-col justify-center w-2/3">
              {endDate < now ? (
                <p className="w-20 border border-solid border-red-500 py-1 px-2 rounded-full text-xs flex items-center justify-center mb-2">
                  開催終了
                </p>
              ) : (
                <p className="w-20 border border-solid border-green-500 py-1 px-2 rounded-full text-xs flex items-center justify-center mb-2">
                  現在開催中
                </p>
              )}
              <p className="font-bold text-sm">{quiz.title}</p>
            </div>
            <div className="flex flex-col justify-center w-3/12">
              <p className="aspect-square flex justify-center items-center text-5xl bg-gray-100 rounded-md">
                {randomEmoji()}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
}
