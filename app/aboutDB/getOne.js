"use server"
import Linker from "./Linker"
import mongoose from "mongoose"
async function getOne(name) {
await mongoose.connect(process.env.MONdb)
let res= await Linker.findOne({handle: name})
return res
}

export default getOne
