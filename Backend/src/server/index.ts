import app from './app';

console.log(process.env.PORT);
app.listen(process.env.PORT ? process.env.PORT : 5000);