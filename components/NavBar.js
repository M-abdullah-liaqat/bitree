"use client";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBar() {
  const mypath = ["/", "/generate"].includes(usePathname());
  const navShow = useRef();
  if (typeof window !== "undefined" && mypath) {
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = () => {
      let currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPos > lastScroll) {
        navShow.current.style.top = "-100px";
        // Add your desired actions here, e.g., show a navigation bar, load more content
      } else if (currentScrollPos < lastScroll) {
        // Optional: Actions when scrolled near the top
        navShow.current.style.top = "30px";
      }
      lastScroll = currentScrollPos;
    };
  }
  return (
      <div
      ref={navShow}
        className={`bg-white w-[97%] 2xl:w-[1532px] rounded-full px-4 h-[100px] ${
          mypath ? "block" : " hidden"
        } px-5  fixed top-[30px] justify-self-center flex justify-between items-center transition-all duration-500 mx-10px`}
      >
        <div className="flex gap-17 items-center">
          <Link href="/">
            <div className="Logo text-3xl font-bold pl-6"> BitTree</div>
          </Link>
          <ul className="flex text-lg font-medium pt-1 items-center">
            <li className="cursor-pointer transition-all hover:bg-neutral-200 px-6 py-3 rounded-2xl">
              Products
            </li>
            <li className="cursor-pointer transition-all hover:bg-neutral-200 px-6 py-3 rounded-2xl">
              Templates
            </li>
            <li className="cursor-pointer transition-all hover:bg-neutral-200 px-6 py-3 rounded-2xl xl:block hidden">
              Marketplace
            </li>
            <li className="cursor-pointer transition-all hover:bg-neutral-200 px-6 py-3 rounded-2xl">
              Learn
            </li>
            <li className="cursor-pointer transition-all hover:bg-neutral-200 px-6 py-3 rounded-2xl">
              Pricing
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Link href="/generate" className="lg:block hidden">
            <button className="bg-neutral-200 cursor-pointer text-xl font-medium px-7 py-5 rounded-2xl">
              Log in
            </button>
          </Link>
          <Link href="/generate">
            <button className="bg-neutral-800 text-white text-xl cursor-pointer font-medium px-7 py-5 rounded-full">
              Sign up free
            </button>
          </Link>
        </div>
      </div>
  );
}

export default NavBar;
