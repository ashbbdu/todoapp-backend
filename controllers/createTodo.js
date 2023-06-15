// import the model

const Todo = require("../models/Todo");

//define route handler

// Its a normal export just like module.exports = createTodo

exports.createTodo = async (req, resp) => {
 
    try {
      // extract title and description from req body
      const { title, description } = req.body;
      //    create a todo object and insert into db
      const response = await Todo.create({ title, description });
      // send a json response  with a success flag
      resp.status(200).json({
        success: true,
        data: response,
        message: "Entry created successfully",
      });
    } catch (e) {
      console.error(e);
      console.log(e);
      resp.status(500).json({
        success: false,
        data: "Internal Server Error",
        message: e.message,
      });
    }

};
