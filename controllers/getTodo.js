// import the model

const Todo = require("../models/Todo");

//define route handler

// Its a normal export just like module.exports = createTodo

exports.getTodos = async (req, resp) => {
  
    try {
      //  extract all the todos from the db
      const todos = await Todo.find({});

      resp.status(200).json({
        success: true,
        data: todos,
        message: "Entire Todo list is fetched",
      });
    } catch (e) {
      console.log(e);
      resp.status(500).json({
        success: false,
        data: "Internal Server Error",
        message: e.message,
      });
    }

};

exports.getTodoById = async (req, resp) => {
  
    try {
      //  extract all the todos from the db
      const id = req.params.id;
      const todo = await Todo.findById({ _id: id });

      // if data for given id is not found

      if (!todo) {
        return resp.status(404).json({
          success: false,

          message: "No data found with given id",
        });
      }

      // data for given id is found
     resp.status(200).json({
        success: true,
        data: todo,
        message: `Todo fetched with id : ${id}`,
      });
    } catch (e) {
      console.log(e);
      resp.status(500).json({
        success: false,
        data: "Internal Server Error",
        message: e.message,
      });
    }
  
};
