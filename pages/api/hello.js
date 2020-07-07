// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === "POST") {
    console.log("worked");
    res.status(200).json("worked");
  } else {
    // Handle any other HTTP method
  }
};
