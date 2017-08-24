const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const signup = require('./signup');
const addrecipe = require('./addrecipe');
const cuisines = require('./cuisines');
const error = require('./error');
const signin = require('./signin');
const newuser = require('./newuser');
const newrecipe = require('./newrecipe');
const recipe = require('./recipe');
const {checkCookie} = require('../models/token');

router.get('/', home);
router.get('/login', login);
router.get('/signup', signup);
router.get('/addrecipe', checkCookie, addrecipe);
router.get(/^\/(asian|italian|arabic|mixed)$/, checkCookie, cuisines);
router.get('/:id', recipe);
router.post('/signin', signin);
router.post('/newuser', newuser);
router.post('/newrecipe', newrecipe);

router.use(error.client);
router.use(error.server);

module.exports = router;
