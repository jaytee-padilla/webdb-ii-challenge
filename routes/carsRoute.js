const express = require('express');
const knex = require('knex');
const router = express.Router();

// database import & configuration
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

// CRUD
// GET
// get list of cars data
router.get('/', async (req, res) => {
	try{
		const cars = await db('cars');
		res.status(200).json(cars);
	} catch(error) {
		res.status(500).json({message: 'Failed to retrieve cars'});
	}
});

module.exports = router;