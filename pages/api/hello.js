// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var xml2js = require("xml2js");

export default (req, res) => {
  if (req.method === "POST") {
    console.log("we'll grab the data from hereasda");
    res.status(200).json("worked");
  } else {
    console.log("worked");
    res.status(200).json("worked");
  }
};
