const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getSingleTodo,
} = require("../../controllers/todo/todoController");

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getSingleTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
