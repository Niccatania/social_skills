const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
  } = require('../../controllers/thoughtcontroller');
  const { Thought } = require('../../models');
  
  router.route('/').get(getThoughts).post(createThought);
  
  router.route('/:thoughtId').get(getSingleThought).post(updateThought)
  
  // router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction)

  module.exports = router;