const express=require('express');
const {getNotes} =require("../controllers/notesController");
const {CreateNote}=require("../controllers/notesController");
const {protect}=require("../middlewares/authMiddleware");
const {getNoteById}=require("../controllers/notesController")
const {UpdateNote}=require("../controllers/notesController");
const {DeleteNote}=require("../controllers/notesController");

const router=express.Router();
router.route("/").get(protect,getNotes);
router.route("/create").post(protect, CreateNote);
router.route("/:id").get(getNoteById) .put(protect, UpdateNote).delete(protect, DeleteNote);
module.exports=router;