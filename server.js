const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json({ extended: false }));

// route included
app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));