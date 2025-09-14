"use client"
import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#254f1a]">
      <div className="min-h-screen w-[1530px] justify-self-center grid grid-cols-2">
        <div className="flex flex-col justify-end pb-14 gap-4">
          <div className="text-lime-300 text-8xl font-black">Everything you are. In one, simple link in bio.</div>
          <div className="text-white text-xl font-normal">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </div>
          <div className="flex gap-2">
            <input className="bg-white rounded-md w-[300px] py-4 px-3" type="text" />
           <Link href="/generate"><button className="bg-pink-200 text-xl cursor-pointer font-medium px-7 py-4 rounded-full">Claim your BitTree</button></Link>
          </div>
        </div>
        <div className="flex flex-col justify-end pb-14 gap-4">
          <img src="/homePic.png" alt="" />
        </div>
      </div>
     <div className="min-h-screen bg-pink-200"></div>
    </div>
  );
}
