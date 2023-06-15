const express = require("express");


const router = express.Router();


// Import controller
const { createTodo } = require("../controllers/createTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { getTodos, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");

// Define api routes

router.post("/createTodo" , createTodo)
router.get("/getTodos" , getTodos)
router.get("/getTodos/:id" , getTodoById)

router.delete("/deleteTodo/:id" , deleteTodo)
router.put("/updateTodo/:id" , updateTodo)

module.exports = router;