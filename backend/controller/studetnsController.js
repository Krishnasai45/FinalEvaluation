const Students = require("../models/students");

const studentsData = (req, res) => {
  console.log(req.query.id);
  Students.findById(req.query.id)
    .then((match) => res.json(match))
    .catch((error) => res.status(404).json({ Error: error }));
};

const getStudentsDetails = (req, res) => {
  //console.log(req.query.q);
  if (req.query.page) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    results.next = {
      page: page + 1,
      limit: limit,
    };

    results.prev = {
      page: page - 1,
      limit: limit,
    };

    Students.find()
      .then((students) => {
        results.length = students.length;
        results.current = students.slice(startIndex, endIndex);

        res.json(results);
      })

      .catch((err) => res.status(500).json("Error" + err));
  } else if (req.query.q) {
    //console.log(req.query.q)
    Students.find({ name: req.query.q })
      .then((result) => res.json(result))
      .catch((err) => res.status(203).json({ ERROR: "USER NAME NOT DEFINED" }));
  }
  Students.find()
  .then((students)=>res.json(students))
  .catch((err)=>res.status(400).json("Error:"+err))
};

module.exports = { studentsData, getStudentsDetails };
