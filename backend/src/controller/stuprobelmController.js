const Problem = require('../models/Stuproblem');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const addproblem = async (req, res, next) => {
  upload.array('images')(req, res, async (error) => {
    if (error) {
      console.error('An error occurred while uploading files', error);
      return res.status(500).json({ error: 'An error occurred while uploading files' });
    }

    try {
      // Extract form field values from the request body
      const {
        fullname,
        email,
        user_id,
        phoneNumber,
        dateOfBirth,
        city,
        gpa,
        program,
        problemDescription,
        amount,
      } = req.body;

      let images = [];

      // Check if files were uploaded
      if (req.files && req.files.length > 0) {
        // Extract image files from the request
        images = req.files.map((file) => file.buffer);
      }

      // Create a new problem instance
      const problem = new Problem({
        fullname,
        user_id,
        email,
        phoneNumber,
        dateOfBirth,
        city,
        gpa,
        program,
        problemDescription,
        amount,
        raised: 0, // Set raised field to zero
        images,
      });

      // Save the problem to the database
      await problem.save();

      res.status(201).json({ message: 'Problem submitted successfully' });
    } catch (error) {
      console.error('An error occurred while submitting the problem', error);
      res.status(500).json({ error: 'An error occurred while submitting the problem' });
    }
  });
};


const getproblem = async (req, res) => {
  try {
    // Retrieve all problems from the database
    const problems = await Problem.find();

    // Convert image buffers to base64 strings
    const problemsWithImages = problems.map((problem) => {
      const images = problem.images.map((image) => {
        const base64String = Buffer.from(image).toString('base64');
        return `data:image/png;base64,${base64String}`;
      });

      return {
        ...problem._doc,
        images,
      };
    });

    res.status(200).json(problemsWithImages);
  } catch (error) {
    console.error('An error occurred while retrieving problems', error);
    res.status(500).json({ error: 'An error occurred while retrieving problems' });
  }
};

const getproblemById = async (req, res) => {
  try {
    const id = req.params.id;
    // Retrieve all problems from the database
    const problems = await Problem.findById(id)
      .select({ raised: 1 })
      .then((problem) => {
        console.log(problem);
        res.status(200).json(problem);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.error("An error occurred while retrieving problems", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving problems" });
  }
};

const updateProblem = async (req, res) => {
  const id = req.params.id;
  const problems = await Problem.updateMany(
    { _id: id },
    { $set: { raised: req.body.raised } }
  );
  res.status(200).json(problems);
};

module.exports = {
  addproblem,
  getproblem,
  getproblemById,
  updateProblem,
};
