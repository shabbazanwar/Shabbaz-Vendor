import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"), // Directory for storing files

    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`; // Generate unique identifier
        const baseFilename = file.originalname.split(".")[0]; // Extract the base file name (without extension)
        cb(null, `${baseFilename}-${uniqueSuffix}.png`); // Final file name with ".png" extension
    },
});

const upload = multer({ storage });

export { upload };
