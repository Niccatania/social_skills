const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    postNewThought,
    updateThought,
    deleteThought
  } = require('../../controllers/thoughtController');
  
  router.route('/').get(getAllThoughts).post(postNewThought);

// //   push the created thought's _id to the associated user's thoughts array field)
  
//   router.route('/:thoughtId').get(getSingleThought);
// // This may need to be / userId
//   router.route('/update').put(updateThought);

//   router.route('/delete').delete(deleteThought);
  
  module.exports = router;