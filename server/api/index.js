import app from "./app.js";

const port = 3000;

app.listen( port,() => {
  console.log(`server running on port ${port}`);
  console.log('http://localhost:3000/api');
})
