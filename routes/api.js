// Full Documentation - https://www.turbo360.co/docs
const turbo = require("turbo360")({ site_id: process.env.TURBO_APP_ID });
const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();
const controllers = require("../controllers/index");

router.get("/:resource", (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource"
    });
    return;
  }
  controller
    .get(req.query)
    .then(data => {
      res.json({
        confirmation: "success",
        message: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

router.get("/:resource/:id", (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource"
    });
    return;
  }
  controller
    .getById(req.params.id)
    .then(data => {
      res.json({
        confirmation: "success",
        message: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

router.post("/:resource", (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource"
    });
    return;
  }
  controller
    .post(req.body)
    .then(data => {
      res.json({
        confirmation: "success",
        message: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

router.put("/:resource/:id", (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource"
    });
    return;
  }
  controller
    .put(req.params.id, req.body)
    .then(data => {
      res.json({
        confirmation: "success",
        message: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

router.delete("/:resource/:id", (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource"
    });
    return;
  }
  controller
    .delete(req.params.id)
    .then(data => {
      res.json({
        confirmation: "success",
        message: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

module.exports = router;
