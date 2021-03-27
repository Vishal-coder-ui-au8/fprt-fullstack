const router = require('express').Router()


// we will upload image on cloudinary
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

// Upload image only admin can use
router.post('/upload', async(req, res) =>{
    try {
        const fileStr = req.body.data;
        const {uploadResponse} = await cloudinary.uploader.upload(fileStr, {folder:"test"})
        console.log(uploadResponse);
        res.json({msg: "uploaded"})
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

// Delete image only admin can use
router.post('/destroy', (req, res) =>{
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg: 'No images Selected'})

        cloudinary.v2.uploader.destroy(public_id, async(err, result) =>{
            if(err) throw err;

            res.json({msg: "Deleted Image"})
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
    
})



module.exports = router