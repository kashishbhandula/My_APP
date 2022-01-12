const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controller');
console.log("User contoller is working");
router.get('/profile',userController.profile);
router.get('/sign_in',userController.sign_in);
router.get('/sign_up',userController.sign_up);
router.get('/sign_out',userController.sign_out);
router.post('/create',userController.create);
router.post('/create_session',userController.createSession);

module.exports=router;