import express from "express";
import {  createUser,
    getAllUsers,
    login,
    updateUserById,
    deleteUserById} from '../controller/user'
    const user = express.Router()
    user.route('/').get(getAllUsers).post(createUser)
    user.route('/:id').put(deleteUserById).delete(deleteUserById)
    user.route('/auth').post(login)
    export {user}
