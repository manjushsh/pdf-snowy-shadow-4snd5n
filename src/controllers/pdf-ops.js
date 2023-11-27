const fs = require("fs");
const PDFExtract = require("pdf.js-extract").PDFExtract;
let buffer;

async function samplePDFReader(_, res) {
  const pdfExtract = new PDFExtract();
  try {
    buffer = await fs.readFileSync("./s1.pdf", "utf8");
  } catch (err) {
    console.error(err);
  }
  const options = {}; /* see below */
  pdfExtract.extractBuffer(buffer, options, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
  });

  res.send({ message: "Hello from PDF reader" });
}

module.exports = { samplePDFReader };
