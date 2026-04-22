const validateAddSchool = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      success: false,
      msg: "Name is required",
    });
  }

  if (!address || typeof address !== "string" || !address.trim()) {
    return res.status(400).json({
      success: false,
      msg: "Address is required",
    });
  }

  const lat = Number(latitude);
  const lon = Number(longitude);

  if (Number.isNaN(lat) || lat < -90 || lat > 90) {
    return res.status(400).json({
      success: false,
      msg: "Latitude must be a valid number between -90 and 90",
    });
  }

  if (Number.isNaN(lon) || lon < -180 || lon > 180) {
    return res.status(400).json({
      success: false,
      msg: "Longitude must be a valid number between -180 and 180",
    });
  }

  req.body.name = name.trim();
  req.body.address = address.trim();
  req.body.latitude = lat;
  req.body.longitude = lon;

  next();
};

export default validateAddSchool;