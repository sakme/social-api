const router = require('express').Router();
const { 
    getAllThought,
    getThoughtById,
    addThought, 
    removeThought,
    addReaction,
    removeReaction,
    updateThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought);

router
    .route('/:userId')
    .get(getThoughtById)
    .put(updateThought)
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;
