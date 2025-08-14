const Home = (req, res) => {
  try {
    res.end(`age : ${req.query.age} gender : ${re.gender}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg:"Server error!!"})
  }
};
const Product = (req, res) => {
  return res.send("Hello This is next Product Page");
};
module.exports = { Home, Product };
