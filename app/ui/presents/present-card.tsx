import Image from "next/image";

export default function PresentCard() {
    return (
        <div className="border border-gray-300 m-1 p-1 rounded-md bg-white">
            <a href="/google-form">
                <div className="flex justify-between p-2">
                    <div className="flex flex-col justify-center w-2/3">
                        <p className="text-xs flex items-center justify-start mb-2">
                            500ptで交換可能
                        </p>
                        <h1 className="font-bold text-sm">
                            Starbacksギフトカード500円分
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center w-3/12">
                        <Image 
                        src={"/starbucks-gift.jpg"} 
                        width={100}
                        height={100}
                        alt={"Picture of starbucks giftcard."} 
                        className="aspect-square bg-red-100 " 
                        />
                    </div>
                </div>
            </a>
        </div>
    )
}