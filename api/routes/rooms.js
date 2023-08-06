import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router=express.Router();

// CREATE
router.post("/:hotelid",verifyAdmin,createRoom);
// DELETE 

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)

// UPDATE

router.put("/:id",verifyAdmin,updateRoom)
router.put("/availability/:id",updateRoomAvailability)

// GET

router.get("/:id",getRoom);

// GET ALL

router.get("/",getRooms) 

export default router