const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');
const { route } = require('./thought-routes');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:id/friend/:friendId')
    .put(addFriend)
    .delete(deleteFriend);

module.exports = router;