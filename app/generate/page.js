"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const [name, setname] = useState("");
  const [Picture, setPicture] = useState("");
  const [Links, setLinks] = useState([
    { linkName: "YouTube", linkUrl: "", linkType: "YouTube" },
  ]);

  const handlelink = async (index, linkName, linkUrl, linkType) => {
    setLinks((initial) => {
      return initial.map((item, i) => {
        if (i === index) {
          if (linkType === "Custom") {
            return { linkName , linkUrl, linkType };
          }
          return { linkName: linkType , linkUrl, linkType };
        } else {
          return item;
        }
      });
    });
  };
  const addlink = async () => {
    let newADD = { linkName: "", linkUrl: "", linkType: "" };
    setLinks([...Links, newADD]);
  };
  const handleAdd = async () => {
    let sendData = {
      handle: name,
      Links: Links,
      profilrPicture: Picture,
    };
    let res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });
    let finRes = await res.json();
    if (finRes.success) {
      toast.success(finRes.massage + "", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        router.push(`/${name}`);
      }, 1600);
    } else {
      toast.error(finRes.massage + "", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="Generate w-full min-h-screen bg-[#e9c0e9] ">
      <div className="min-h-screen w-[1530px] justify-self-center grid grid-cols-2">
        <div className="flex flex-col justify-center pb-14 gap-4 pt-[140px]">
          <div className="text-[#502274] text-3xl font-black">
            Create your BitTree
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#502274] text-xl font-bold">
              Step 1: Claim your handle
            </div>
            <input
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="bg-white rounded-full w-[250px] py-1 px-4"
              placeholder="Select a Handle"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#502274] text-xl font-bold ">
              Step 2: Add Links
            </div>
            <div>
              <div className="flex flex-col gap-4">
                {Links.length > 0 &&
                  Links &&
                  Links.map((item, index) => {
                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex gap-3 items-start justify-center flex-col">
                          <label htmlFor="cars" className="text-lg font-medium">
                            Choose Type:
                          </label>
                          <select
                            name="cars"
                            id="cars"
                            className="bg-white rounded-full w-[250px] py-1 px-4"
                            onChange={(e) => {
                              handlelink(
                                index,
                                item.linkName,
                                item.linkUrl,
                                e.target.value
                              );
                            }}
                          >
                            <option value="YouTube">YouTube</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Tik Tok">Tik Tok</option>
                            <option value="X.com">X.com</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Custom">Custom</option>
                          </select>
                        </div>
                        <div className="flex gap-[20px]">
                          {item.linkType === "Custom" && (
                            <input
                              value={item.linkName || ""}
                              onChange={(e) => {
                                handlelink(
                                  index,
                                  e.target.value,
                                  item.linkUrl,
                                  item.linkType
                                );
                              }}
                              className="bg-white rounded-full w-[250px] py-1 px-4"
                              placeholder="Enter link name"
                              type="text"
                            />
                          )}
                          <input
                            value={item.linkUrl || ""}
                            onChange={(e) => {
                              handlelink(
                                index,
                                item.linkName,
                                e.target.value,
                                item.linkType
                              );
                            }}
                            className="bg-white rounded-full w-[250px] py-1 px-4"
                            placeholder="Enter link URL"
                            type="text"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div>
                <button
                  onClick={() => addlink()}
                  className="bg-neutral-800 text-white cursor-pointer font-medium px-3 py-1 rounded-full mt-4"
                >
                  Add Link +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#502274] text-xl font-bold">
              Step 3: Add pictue and finish
            </div>
            <div>
              <input
                value={Picture || ""}
                onChange={(e) => {
                  setPicture(e.target.value);
                }}
                className="bg-white rounded-full w-[520px] py-1 px-4"
                placeholder="Enter profile picture link"
                type="text"
              />
              <div>
                <button
                  onClick={handleAdd}
                  type="submit"
                  disabled={
                    name == "" || Picture == "" || Links[0].linkName == ""
                  }
                  className="bg-neutral-800 disabled:bg-neutral-700 text-white cursor-pointer font-medium px-3 py-2 rounded-full mt-8"
                >
                  Create Your BItTree
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end pb-14 gap-4 pt-[140px]">
          <img src="/genPic.png" alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Page;
