import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifytoken.js";
const router=express.Router();

// CREATE
router.post("/",verifyAdmin,createHotel);
// DELETE 

router.delete("/:id",verifyAdmin, deleteHotel)

// UPDATE

router.put("/:id",verifyAdmin,updateHotel)

// GET

router.get("/find/:id",getHotel);

// GET ALL

router.get("/",getHotels);


router.get("/countByCity",countByCity) 


router.get("/countByType",countByType) 

router.get("/room/:id",getHotelRooms) 

export default router