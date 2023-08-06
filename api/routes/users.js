import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifytoken.js";

const router=express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("HEllo user you are logged in");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("HEllo user you are logged in and you can delete ur account");
// })  

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("HEllo Admin you are logged in and you can delete all account");
// })  
// DELETE 

router.delete("/:id",verifyUser,deleteUser)

// UPDATE

router.put("/:id",verifyUser,updateUser)

// GET

router.get("/:id",verifyUser,getUser);

// GET ALL

router.get("/",verifyAdmin,getUsers) 

export default router