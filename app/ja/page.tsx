import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col justify-content items-center">
            <div className="min-h-80 md:min-h-screen flex flex-col justify-center items-center bg-cover bg-center rounded-md mt-16 w-full" style={{ backgroundImage: "url('/IMG_2607.jpg')" }}>
                <div className="flex flex-col justify-center items-center w-3/4 sm:w-1/2 aspect-square border border-*-4 border-white bg-black bg-opacity-30">
                    <h1 className="text-white text-3xl md:text-3xl lg:text-4xl">ベッティングで</h1>
                    <h1 className="text-white text-3xl md:text-3xl lg:text-4xl">気候変動を知る！</h1>
                </div>
            </div>
            <div className="flex flex-col justify-start w-full mt-4">
                <p className="text-xl text-gray-600 px-4 mb-4">
                    Climate Betは、気候変動に関する質問に対してポイントをベットすることで、気候変動について学び、気候変動に関する意識を高めることができる新しい形のベッティングアプリです。あなたは今、気候変動に対してとるあなた自身の立場が明確ですか？また、それを裏付けるデータや情報を持っていますか？
                </p>
                <p className="text-xl text-gray-600 px-4 mb-4">
                    あなたの住む地域に地球温暖化はどれほどの影響を及ぼしているのでしょうか。
                    毎日出題される問題に対して、あなたの予想をポイントでベットしましょう！
                    <br />
                    <span className='text-sm text-gray-400'>e.g.)
                        あなたの住む地域では今年の夏の日最高降水量はこれまでの最高値を更新するでしょうか？
                        <br />e.g.)地球規模で、来週1週間の気温は過去10年間と比べて上昇するでしょうか？
                    </span>
                </p>
            </div>
            <h3 className="text-xl font-bold mb-4">聞いてほしいこと</h3>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center w-full">
                <div className="flex flex-col justify-start items-center bg-gray-600 m-4 w-3/4 sm:w-1/3 aspect-video p-2">
                    <p className="text-5xl mb-1">🌱</p>
                    <p className="text-white text-lg">唯一のメンバーは生態学専攻です。CS専攻ではないため、開発に関する様々なアドバイスや手助けを常に受け付けています。</p>
                </div>
                <div className="flex flex-col justify-start items-center bg-gray-600 m-4 w-3/4 sm:w-1/3 aspect-video p-2">
                    <p className="text-5xl mb-1">🤑</p>
                    <p className="text-white text-lg"><span className="line-through">決済機能を開発できないため、</span>登録してくれた方に1000ptを配布しています。ぜひテストユーザーとしてプレイしてみてください！</p>
                </div>
                <div className="flex flex-col justify-start items-center bg-gray-600 m-4 w-3/4 sm:w-1/3 aspect-video p-2">
                    <p className="text-5xl mb-1">☕️</p>
                    <p className="text-white text-lg">テストユーザーとしてプレイしてくれた方にも、ギフトカードなどの商品をお送りします。</p>
                </div>
            </div>
            <div className="flex flex-col justify-start w-full mt-4">
                <p className="text-xl text-gray-600 px-4 mb-4">
                    興味が湧いてきましたか？次はあなたが体験してみる番です！
                </p>
                <p className="text-xl text-gray-600 px-4 mb-4">
                    さあ、一緒に冒険を始めましょう！
                </p>
            </div>

        </div>
    );
}