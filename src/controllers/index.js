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
const cusines = require('./cusines');
const error = require('./error');


router.get('/', home);
router.get('/login', (req, res) => res.send('login'))
router.get('/signup', (req, res) => res.send('signup'));
router.get('/addrecipe', (req, res) => res.send('addrecipe'));
// router.get('/:cusines', (req, res) => res.send(`${res.params.cusines}`));
// router.get('/:cusine/:id', (req, res) => res.send(`${res.params.id}`));

router.use(error.client);
router.use(error.server);



module.exports = router;
