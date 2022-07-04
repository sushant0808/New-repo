import User from "../models/client.model";
export const addClient = async (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    notes: req.body.notes,
    addresses: req.body.addresses,
    creditCards: req.body.creditCards,
  };

  try {
    const data = await User.create(userData);
    res.status(200).json({
      message: "Client data added successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Couldnt add client data",
    });
  }
};

export const displayAllClients = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({
      message: "Successfully fetched client details",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Couldnt fetch cleint details",
    });
  }
};

export const displayClientById = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).json({
      message: "Successfully fetched individual client",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Couldnt fetch individual cleint details",
    });
  }
};
