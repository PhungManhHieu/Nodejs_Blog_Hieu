const Course = require("../Models/Course");
const { mongooseToObject } = require("../../ulti/mongooes");

class courseController {
  // [GET] /courses/_id
  show(req, res, next) {
    Course.findOne({ _id: req.params._id })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params._id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params._id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params._id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new courseController();
