const app = require('./app.js');
const DB = require('./database/DB.js');

// Connect To DataBase
DB();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
