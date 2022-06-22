// STRETCH
const cars = [
  {
    vin: "1111111111",
    make: "toyota",
    model: "prius",
    mileage: 21500,
    title: "clean",
    transmission: "manual",
  },

  {
    vin: "1111111111",
    make: "toyota",
    model: "corolla",
    mileage: 11500,
    title: "salvage",
  },

  {
    vin: "1111111111",
    make: "ford",
    model: "focus",
    mileage: 1500,
  },
];

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate()
//     .then(() => {
//       return knex("cars").insert(cars);
//     });
// };

//async function
exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
