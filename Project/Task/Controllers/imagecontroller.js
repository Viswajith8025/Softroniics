import image from "../Models/Image.js";

const addimage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const imagepath = req.file.path; 
        console.log("Uploaded File Path:", imagepath);

        const newproduct = new image({
            ...req.body,
            image: imagepath,
        });

        const saveproduct = await newproduct.save();
        res.status(201).json(saveproduct);
    } catch (e) {
        console.error("Error:", e.message);
        res.status(500).json({ error: e.message });
    }
};
export default addimage;