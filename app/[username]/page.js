import getOne from "../aboutDB/getOne";
import { notFound } from "next/navigation";
import Image from "next/image";

async function page({ params }) {
  let name = (await params).username;
  let dummy= "MY name is MY"
  let finalName= name.replaceAll("%20", " ")
  console.log(finalName)
  let allData = await getOne(finalName);
  if (!allData) {
    return notFound();
  }
  return (
    <div className="bg-amber-600 min-h-screen">
      <div className="min-w-[full] min-h-screen flex flex-col justify-start items-center gap-2 pt-10 pb-10">
        <div className="w-[220px] h-[220px]">
          <div>
            <img
              className="w-[180px] h-[180px] rounded-full object-cover"
              src={
                allData.profilrPicture ? allData.profilrPicture : "/sher.jpg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="text-4xl font-bold text-blue-950">{finalName}</div>
        <div className="flex flex-col gap-4">
          {allData.Links &&
            allData.Links.map((item, index) => {
              return (
                item.linkName && (
                  <a key={index} href={item.linkUrl}>
                    <button
                      className={`${
                        item.linkType === "YouTube"
                          ? "bg-red-700"
                          : item.linkType === "Facebook"
                          ? "bg-[#1877f2]/90"
                          : item.linkType === "Instagram"
                          ? "bg-[#962fbf]/90"
                          : item.linkType === "Tik Tok"
                          ? "bg-black/90"
                          : item.linkType === "X.com"
                          ? "bg-black/90"
                          : item.linkType === "Linkedin"
                          ? "bg-[#1877f2]/90"
                          : "bg-white/90"
                      }
 ${item.linkType === "Custom" ? "text-black" : "text-white"}
                     md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-center font-bold px-6 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent ${
                       item.linkType === "Custom"
                         ? "hover:border-black"
                         : "hover:border-white"
                     } flex justify-center items-center gap-5`}
                    >
                      <div>{item.linkName}</div>
                    </button>
                  </a>
                )
              );
            })}
          {/* <button
            className={`${"bg-red-700"} text-white md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-center font-bold px-6 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent hover:border-white flex justify-center items-center gap-5`}
          >
            <div>YouTube</div>
          </button>
          <button className="bg-[#1877f2]/90 md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-white text-center font-bold px-2 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent hover:border-white flex justify-center items-center gap-5">
            <div>FaceBook</div>
          </button>
          <button className="bg-[#962fbf]/90 md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-white text-center font-bold px-2 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent hover:border-white flex justify-center items-center gap-5">
            <div>Instagram</div>
          </button>
          <button className="bg-black/90 md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-white text-center font-bold px-2 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent hover:border-white">
            Tik Tok
          </button>
          <button className="bg-black/90 md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-white text-center font-bold px-2 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent hover:border-white">
            X.com
          </button>
          <button className="bg-[#1877f2]/90 md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-white text-center font-bold px-2 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent hover:border-white">
            linkedIn
          </button>
          <button className="bg-white/90 md:text-2xl text-xl cursor-pointer md:w-[400px] w-[300px] text-blue-950 text-center font-bold px-2 py-4 rounded-2xl hover:scale-105 transition-all border-3 border-transparent hover:border-black">
            Custom
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default page;
