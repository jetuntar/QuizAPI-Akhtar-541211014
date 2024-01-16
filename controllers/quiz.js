const db = require("../models");
const Quiz = db.quizzes;

//CREATE
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body)
    res.json({
      message: "Quiz created successfully",
      data:data,
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}

//READ ALL
exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll()
    res.json({
      message: "Quizzes retrieve successfully.",
      data: quizzes,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}

//UPDATE
exports.update = async (req, res) => {
  const id = req.params.id
  try {
    const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
    quiz.update(req.body, {
      where:{id}
    })
    res.json({
      message: "Quiz updated successfully",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while retrieving quiz",
      data: null,
    });
  }
}

//DELETE
exports.delete = async (req, res) => {
  const id = req.params.id
  try {
    const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})

    quiz.destroy()

    res.json({
      message: "Quiz deleted successfully",
    })

  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while retrieving quiz",
      data: null,
    });
  }
}

//GET ALL
exports.findOne = async (req, res) => {
  const id = req.params.id
  try {
    const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
    res.json({
      message: `Quizzes retrieved successfully with id=${id}.`,
      data: quiz,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while retrieving quiz",
      data: null,
    });
  }
}

//GET BY CATEGORY
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id
  const quizzes = await Quiz.findAll({
    where : {
      categoryId: id
    }
  })
    res.json({
      message: `Quizzes retrieved successfully with categoryId=${id}.`,
      data: quizzes,
    });
}

//GET BY LEVEL
exports.getByLevelId = async (req, res) => {
  const id = req.params.id
  const quizzes = await Quiz.findAll({
    where : {
      levelId: id
    }
  })
    res.json({
      message: `Quizzes retrieved successfully with levelId=${id}.`,
      data: quizzes,
    });
}