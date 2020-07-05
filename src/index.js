const express = require('express');
const chalk = require('chalk');

const relationsRouter = require('./routers/relations.router');

const app = express();
const port = process.env.PORT || 5500;

app.use(express.json());
app.use('/relations', relationsRouter);

app.listen(port, () => {
    console.log(chalk.green.inverse(`Server is up and running on port ${port}`));
});