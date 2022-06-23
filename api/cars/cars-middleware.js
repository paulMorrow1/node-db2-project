const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;
  if (!id)
    res.status(404).json({
      message: `car with id ${carID} is not found`,
    });
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  res.status(400).json({
    message: `${fieldName} is missing`,
  });
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};
