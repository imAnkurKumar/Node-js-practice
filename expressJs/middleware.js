const ageDetector = (req, res, next) => {
  if (req.query.age > 18) {
    res.send("You are eligible to login the website");
  } else {
    res.send("you are not eligible");
  }
};
module.exports=ageDetector;
