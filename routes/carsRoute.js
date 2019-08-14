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

// POST
// add a car to database
router.post('/', async (req, res) => {
	try{
		const newCarData = req.body;
		const [id] = await db('cars').insert(newCarData);
		const newCarEntry = await db('cars').where('id', id).first();

		res.status(201).json(newCarEntry);
	} catch (error) {
		console.log('Post error', error);
		res.status(500).json({message: 'Failed to store data'});
	}
});

module.exports = router;