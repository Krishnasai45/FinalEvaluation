const express = require("express");
const router = express.Router();
const { authMiddleWare } = require("../middleware/authmiddleware");
const { registerUser, loginUser } = require("../controller/adminController");
const {
  studentsData,
  getStudentsDetails,
} = require("../controller/studetnsController");

router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/studentID", studentsData);
router.get("/studentsDetails", getStudentsDetails);
router.use(authMiddleWare);

module.exports = router;
