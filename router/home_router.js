const express = require('express');
let router = express.Router();

router.get("/", homePage);
router.get("/:name", home);


/**
 *        Function: homePage
 *         Purpose: get the home page of the website
 * @param {*} req : request  object
 * @param {*} res : response object
 */
function homePage(req, res) {
    res.render('index', {name: "Raphaël"});
}



/**
 *        Function: home
 *         Purpose: get the home page of the website
 * @param {*} req : request  object
 * @param {*} res : response object
 */
function home(req, res) {
    const name = req.params.name;
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    res.render('index', {name: capitalizedName});
}






module.exports = router;