const Todo = require("../../models/todos/todoModel");

// GET SINGLE TODO
// METHOD : GET
// TYPE : PUBLIC
const getSingleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ msg: "Can't Find Todo" });
  }
};

// GET ALL TODOS
// METHOD : GET
// TYPE : PUBLIC
const getTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(404).json({ msg: "Can't Find Todos" });
  }
};

// CREATE SINGLE TODO
// METHOD : POST
// TYPE : PUBLIC
const createTodo = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ msg: "Please Fill All Details!!" });
  }
  try {
    const newTodo = await Todo.create({ title, description });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(401).json({ msg: "Todo Not Created" });
  }
};

// UPDATE SINGLE TODO
// METHOD : PUT
// TYPE : PUBLIC
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(404).json({ msg: "Can't Update Todo" });
  }
};

// DELETE SINGLE TODO
// METHOD : DELETE
// TYPE : PUBLIC
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "TODO DELETED" });
  } catch (error) {
    res.status(404).json({ msg: "Can't Delete Todo" });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getSingleTodo,
};
