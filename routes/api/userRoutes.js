const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    postNewUser,
    updateUser,deleteUser
  } = require('../../controllers/userController');
  
  router.route('/').get(getAllUsers).post(postNewUser);
  
  router.route('/:userId').get(getSingleUser);
// This may need to be / userId
  router.route('/update').put(updateUser);

  router.route('/delete').delete(deleteUser);
  
  module.exports = router;
  
