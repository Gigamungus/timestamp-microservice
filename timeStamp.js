const timeStamp = (req, res) => {
  let time = req.params.date_string;
  if (!isNaN(Number(time))) time = Number(time);
  time = new Date(time);

  res.json({
    unix: time.getTime(),
    utc: time.toGMTString()
  });
};

module.exports = timeStamp;
