const customerService = require("../services/customer");

exports.createCustomer = async function (req, res) {
  try {
    const id = await customerService.createCustomer(req.body);
    res.status(201).json({
      success: true,
      message: "New customer created",
      data: {
        customerId: id,
      },
    });
  } catch (error) {
    throw error;
  }
};
