const router = require('express').Router();
// const { up } = require('inquirer/lib/utils/readline');
const {
    getAllUsers,
    getSingleUser,
    postNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/userControls');
const { User } = require('../../models');
  
  router.route('/').get(getAllUsers).post(postNewUser);

  router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser)

  router.route('/:userId/friends/:friendId').post(addFriend)
  
  module.exports = router;
  
