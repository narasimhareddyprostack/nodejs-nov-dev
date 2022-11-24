import express from 'express'
import morgan from 'morgan'
//import chalk from 'chalk';

const app = express();


app.use(morgan('tiny'));

app.get("/", (req, res) => {
    res.send("Node JS with ES6")
})
app.listen(8080, (err) => {
    if (err) throw err
    //console.log(chalk.blue.bgRed.bold('Hello world!'));
    console.log(`Server Running`);
    // console.log(`${chalk.red(`Server Running...${8080}`)}`);
})