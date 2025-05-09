var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const roleController = require('../controllers/roleController')
const subscriberController = require('../controllers/subscriberController')
const subscriptionController = require('../controllers/subscriptionController')
const alertController = require('../controllers/alertController')
const auditLogController = require('../controllers/auditLogController')

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

/* GET, POST, UPDATE, DELETE for create, update and delete a subscriber */
router.post('/addSubscriber', subscriberController.CreateSubscriber);
router.get('/allSubscribers', subscriberController.getAllSubscribers);
router.put('/updateSubscriber/:id', subscriberController.UpdateSubscriber);
router.delete('/deleteSubscriber/:id', subscriberController.deleteSubscriber);

/*GET AND POST For subscription*/
router.post('/addSubscription', subscriptionController.CreateSubscription);
router.get('/allSubscriptions', subscriptionController.getAllSubscriptions);

/*Post for alert*/
router.post('/addAlert', alertController.createAlert);

/*Post for auditLog*/
router.post('/addAuditLog', auditLogController.createAuditLog);
module.exports = router;
