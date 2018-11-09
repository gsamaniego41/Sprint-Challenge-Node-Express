const server = require("./api/server");
const port = process.env.PORT || 4500;

server.listen(port, console.log(`\n== Server is LIVE on port ${port} ==\n`));
