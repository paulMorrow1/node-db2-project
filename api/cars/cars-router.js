// DO YOUR MAGIC
const Car = require("./cars-model");
const router = require("express").Router();

router.get("/", (req, res) => {
  Car.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Failed to retrieve cars: ${err.message}` });
    });
});

router.get("/:id", (req, res) => {
  Car.getById(req.params.id)
    .then((car) => {
      if (car) {
        res.json(car);
      } else {
        res.status(404).json({ message: "Failed to retrieve car" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: `Failed to retrieve ${err.message}` });
    });
});

module.exports = router;
