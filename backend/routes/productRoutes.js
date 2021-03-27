const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
//router.get("/admin", getAdmin);

// function getAdmin(){
//   return (
// <div><br /><br /><br /><br /><h1>Admin</h1>
// <br /><br /><br /><br /><h1>Admin</h1>
// <br /><br /><br /><br /><h1>Admin</h1>
// </div>
//   );
// }


module.exports = router;
