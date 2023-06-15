// import todo model

const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id , "id")
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
   
    res.status(200).json({
      success: true,
      data: todo,
      message: `Data with id : ${id} updated successfully`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success : false,
      error : err.message,
      message : "Server Error"
    })
  }
};
