const SentToken = (res, user, statusCode) => {
  const token = user.generateJwt();

  const options = {
    httpOnly: true,
  };

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, user, token });
};

module.exports = SentToken;
