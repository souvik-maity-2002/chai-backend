import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import path from "path"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        
        // Convert path to absolute and normalize for cross-platform compatibility
        const absolutePath = path.resolve(localFilePath)
        console.log("Uploading file from:", absolutePath)
        
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(absolutePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        // console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(absolutePath)
        return response;

    } catch (error) {
        console.log("Cloudinary upload error:", error.message)
        try {
            fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        } catch (e) {
            console.log("Could not delete file:", e.message)
        }
        return null;
    }
}



export {uploadOnCloudinary}