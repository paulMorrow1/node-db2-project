// DO YOUR MAGIC
const Car = require("./cars-model");
const router = require("express").Router();
const {
  checkVinNumberValid,
  checkCarPayload,
  checkVinNumberUnique,
} = require("./cars-middleware");

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

router.post(
  "/",
  checkCarPayload("vin"),
  checkCarPayload("make"),
  checkCarPayload("model"),
  checkCarPayload("mileage"),
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res) => {
    Car.create(req.body)
      .then((newCarEntry) => {
        res.status(201).json(newCarEntry);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: `Failed to create car: ${err.message}` });
      });
  }
);

module.exports = router;
