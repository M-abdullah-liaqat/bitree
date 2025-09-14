import mongoose from "mongoose";
import Linker from "@/app/aboutDB/Linker";

export async function POST(request) {
  await mongoose.connect(process.env.MONdb);
  let realData = await request.json();
  let Chaeckhand = await Linker.findOne({ handle: realData.handle });
  if (Chaeckhand) {
    return Response.json({ sucess: false, massage: "Handle not available" });
  } else {
    let newdata = new Linker(realData);
    await newdata.save();
    return Response.json({ success: true, massage: "Saved!" });
  }
}
