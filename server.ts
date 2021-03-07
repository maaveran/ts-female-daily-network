import app from "./app";
const PORT = process.env.NODE_EXP_PORT;

app.listen(PORT, () => {console.log(`Server listening on port : *`,PORT)});