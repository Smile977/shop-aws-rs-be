'use strict';

module.exports.getProductById = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        product: '1 book from array',
        price: 12345,
      },
    ),
  };
};