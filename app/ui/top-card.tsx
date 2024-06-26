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
    <div
      key={quiz.id}
      className="sm:w-2/3 bg-white flex flex-col justify-end border border-gray-300 m-1 p-2 rounded-md"
    >
      <div>
        <Image
          src="/IMG_2607.jpg"
          width={500}
          height={500}
          alt="Picture of forest"
          priority={true}
          className="flex justify-center items-center object-cover mb-2 aspect-[4/3] sm:w-full sm:h-80 rounded-md"
        />
        <div className="h-1/4">
          {end_date < now ? (
            <p className="w-20 border border-solid border-red-500 py-1 px-2 rounded-full text-xs flex items-center justify-center mb-2">
              Closed!
            </p>
          ) : (
            <p className="w-20 border border-solid border-green-500 py-1 px-2 rounded-full text-xs flex items-center justify-center mb-2">
              Now Open!
            </p>
          )}
          <Link href={`/quiz/${quiz.id}`} className="font-bold text-sm">
            {quiz.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
