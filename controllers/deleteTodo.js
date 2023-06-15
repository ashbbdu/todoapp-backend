const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    // const todo = await Todo.findByIdAndDelete(id)
    // or
    const todo = await Todo.deleteOne({ _id: id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }
    res.status(200).json({
        success : true,
        data : todo,
        message : `Data with id : ${id} deleted successfully`
    })
  } catch (err) {
    console.log(err);
      res.status(500).json({
        success: false,
        data: "Internal Server Error",
        message: err.message,
      })}
};
