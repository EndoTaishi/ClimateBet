import PresentCard from "../ui/presents/present-card";

export default function Page() {
    return (
        <>
            <div className="flex flex-col justify-around items-center w-full pt-6 mt-16">
                <p className="text-sm font-medium pb-1 px-1 border-dashed border-b border-t-0 border-r-0 border-l-0 border-black">PRESENTS</p>
                <h1 className="flex justify-center text-xl font-medium w-full pt-4 pb-6">交換可能な商品</h1>
            </div>
            <PresentCard />
        </>
    )
}