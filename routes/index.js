var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const roleController = require('../controllers/roleController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET and POST  for create and get a user */ 
router.post('/add', userController.CreateUser);
router.get('/allUsers', userController.getAllUsers);
router.put('/updateUser/:id', userController.UpdateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

/* GET and POST  for create and get a role */ 
router.get('/allRoles', roleController.getAllRoles);
router.post('/addRole', roleController.createRole);


module.exports = router;
