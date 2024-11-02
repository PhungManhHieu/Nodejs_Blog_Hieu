const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/courseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:_id/edit", courseController.edit);
router.put("/:_id", courseController.update);
router.delete("/:_id", courseController.delete);
router.get("/:_id", courseController.show);

module.exports = router;
