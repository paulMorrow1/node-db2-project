const vinValidator = require("vin-validator");
const Car = require("./cars-model");

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;
  if (!id)
    res.status(404).json({
      message: `car with id ${carID} is not found`,
    });
};

const checkCarPayload = (fieldName) => (req, res, next) => {
  // DO YOUR MAGIC
  const car = req.body;
  if (car.hasOwnProperty(fieldName)) {
    next();
  } else {
    res.status(400).json({
      message: `${fieldName} is missing`,
    });
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const car = req.body;
  const isValidVin = vinValidator.validate(car.vin);
  if (isValidVin) {
    next();
  } else res.status(400).json({ message: `vin ${car.vin} is invalid` });
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const newCar = req.body;
  Car.getAll()
    .then((cars) => {
      // cars is an array
      // loop through the array and check if car.vin exists on an existing car
      const doesExist = cars.some((car) => {
        return newCar.vin === car.vin;
      });
      if (doesExist) {
        res.status(400).json({ message: `vin ${newCar.vin} already exists` });
      } else {
        next();
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Failed to retrieve cars: ${err.message}` });
    });
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
