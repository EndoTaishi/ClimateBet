"use client";
import { useState } from "react";

export default function BetButton() {
  const [betAmount, setBetAmount] = useState("10");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // イベントの型をReact.ChangeEvent<HTMLInputElement>に変更
    setBetAmount(e.target.value);
  };
  const [option, setOption] = useState("はい");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center mb-6 border border-black rounded-full px-12 w-full">
        <label className="flex justify-center items-center text-lg mr-6 h-12">
          <input
            type="radio"
            name="option"
            value="はい"
            checked={option === "はい"}
            onChange={() => setOption("はい")}
          />
          はい
        </label>
        <label className="flex justify-center items-center text-lg h-14">
          <input
            type="radio"
            name="option"
            value="いいえ"
            checked={option === "いいえ"}
            onChange={() => setOption("いいえ")}
          />
          いいえ
        </label>
      </div>
      <div className="border border-blue-900 rounded overflow-hidden w-4/5 mb-4">
        <button
          type="button"
          className="bg-blue-900 text-white px-4 py-2 w-1/5"
          onClick={
            () => setBetAmount((prev) => (parseInt(prev) - 10).toString()) // 文字列を数値に変換してから演算し、再び文字列に変換する
          }
        >
          -
        </button>
        <input
          type="text"
          name="betAmount"
          value={betAmount}
          onChange={handleInputChange}
          placeholder="賭ける金額を入力してください"
          className="flex-1 text-center bg-white text-blue-900 py-2 rounded outline-none w-3/5"
        />
        <button
          type="button"
          className="bg-blue-900 text-white px-4 py-2 w-1/5"
          onClick={
            () => setBetAmount((prev) => (parseInt(prev) + 10).toString()) // 文字列を数値に変換してから演算し、再び文字列に変換する
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
