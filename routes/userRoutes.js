const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../Middleware/authMiddleware');
const userController = require('../Controller/userController');

router.get('/dashboard', isAuthenticated, userController.getDashboard);

router.get('/food',isAuthenticated, userController.getAllFoods);

module.exports = router;