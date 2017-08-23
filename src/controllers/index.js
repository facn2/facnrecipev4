// //Routes
// homeroute '/'
// askforloginpage '/select'
// login '/loging' (post)
// signup 'signup' (post)
// cusines '/:cusines' [arabic, italian, asian, mixed]
  // recipe '/:cusine/:id'
// addform '/addrecipe' (post)

const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
// const cusines = require('./cusines');
const login = require('./login');
const signup = require('./signup');
const addrecipe = require('./addrecipe');
const cusines = require('./cusines')
const error = require('./error');
const signin = require('./signin');
const newuser = require('./newuser');
const newrecipe = require('./newrecipe');
const recipe = require('./recipe')


router.get('/', home);
router.get('/login', login)
router.get('/signup', signup);
router.get('/addrecipe', addrecipe);
router.get(/^\/(asian|italian|arabic|mixed)$/, cusines);
router.get('/:id', recipe);
router.post('/signin', signin);
router.post('/newuser', newuser);
router.post('/newrecipe', newrecipe);
// router.get('/:cusine/:id', (req, res) => res.send(`${res.params.id}`));
// ${req.params.cusines}

router.use(error.client);
router.use(error.server);



module.exports = router;
