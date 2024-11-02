const Course = require("../Models/Course");
const { mutipleMongooseToObject } = require("../../ulti/mongooes");

class meController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored_courses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new meController();
