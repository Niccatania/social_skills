const router = require('express').Router();


const { up } = require('inquirer/lib/utils/readline');
const {
    getAllUsers,
    getSingleUser,
    postNewUser,
    updateUser,deleteUser
  } = require('../../controllers/userControls');
const { User } = require('../../models');
  
  router.route('/').get(getAllUsers).post(postNewUser);

  router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser)
// This may need to be / userId
  

  // router.route('/delete').delete(deleteUser);

  
  module.exports = router;
  
