const path = require("path");
const express = require("express");
const cors = require("cors");

const pdfRoutes = require("./routes/pdf-ops");
const app = express();
const port = process?.env?.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/pdf-ops", pdfRoutes);

app.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
