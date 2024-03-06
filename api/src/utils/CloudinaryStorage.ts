import multer from "multer";

const storage = multer.memoryStorage()
export const uploadImage = multer({
    storage:storage,  //multers disk storage destination
    limits: {
        fileSize: 5 * 1024 *1024 //maximum of 5MB file 
    }
})