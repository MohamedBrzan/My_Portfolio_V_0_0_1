const SentToken = (res, user, statusCode) => {
  const token = user.generateJwt();

  const options = {
    expires: new Date(Date.now() + 5000 * 60 * 60 * 1000),
    httpOnly: true,
  };

  const message = 'User logged in successfully';

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ statusCode, message, user, token });
};

module.exports = SentToken;
