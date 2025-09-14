import mongoose from "mongoose";

const schma= mongoose.Schema

let SaveLinks=new schma({
    
    handle: {type: String, required: true},
    Links: {type: Array, required: true},
    profilrPicture: {type: String, required: true}
})

export default mongoose.models.userData || mongoose.model("userData", SaveLinks)