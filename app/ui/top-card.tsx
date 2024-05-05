import Image from "next/image";
import Link from "next/link";

type Quiz = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
};

export default async function TopCard({ quizzes }: { quizzes: Quiz[] }) {
  const quiz = quizzes[0];

  const now = new Date();
  const end_date = new Date(quiz.end_date);

  return (
    <article
      key={quiz.id}
      className="aspect-[4/3] bg-white flex flex-col justify-end border border-gray-300 m-1 p-2 rounded-md"
    >
      <Image
        src="/IMG_2607.jpg"
        width={500}
        height={500}
        alt="Picture of forest"
        priority={true}
        className="object-cover h-3/4 w-auto mb-2 aspect-[4/3]"
      />
      <div className="h-1/4">
        {end_date < now ? (
          <p className="w-20 border border-solid border-red-500 py-1 px-2 rounded-full text-xs flex items-center justify-center mb-2">
            開催終了
          </p>
        ) : (
          <p className="w-20 border border-solid border-green-500 py-1 px-2 rounded-full text-xs flex items-center justify-center mb-2">
            現在開催中
          </p>
        )}
        <Link href={`/quiz/${quiz.id}`} className="font-bold text-sm">
          {Array.isArray(quiz) ? quiz[0].title : quiz.title}
        </Link>
      </div>
    </article>
  );
}
