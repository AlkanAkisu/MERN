const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

router.post(
	'/',
  [check('name', 'Name is required').not().isEmpty(),
  check('email','Please enter a valid email').isEmail,
  check('password','Please enter min 6 letters').isLength({
    min:6,
    

  })
  ],
	(req, res) => {
		console.log(req.body);
		res.send('User Route');
	}
);

module.exports = router;

