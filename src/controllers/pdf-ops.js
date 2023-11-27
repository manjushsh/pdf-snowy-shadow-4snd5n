const fs = require("fs");
const PDFExtract = require("pdf.js-extract").PDFExtract;

function samplePDFReader(_, res) {
  const pdfExtract = new PDFExtract();
  const buffer = fs.readFileSync("../public/docs/s1.pdf");
  const options = {}; /* see below */
  pdfExtract.extractBuffer(buffer, options, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
  });

  res.send({ message: "Hello from PDF reader" });
}

module.exports = { samplePDFReader };
