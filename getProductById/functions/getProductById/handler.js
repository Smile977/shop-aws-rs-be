'use strict';

module.exports.getProductById = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        count: 6,
        description: "Short Product Description3",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
        price: 10,
        title: "ProductNew"
      },
    ),
  };
};