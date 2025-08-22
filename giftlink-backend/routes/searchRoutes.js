/* jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const logger = require('../logger');

// Search for gifts
router.get('/', async (req, res, next) => {
    try {
        // Connect to MongoDB
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        // Build query object
        let query = {};
        if (req.query.name && req.query.name.trim() !== '') {
            query.name = { $regex: req.query.name, $options: 'i' }; // partial, case-insensitive
        }
        if (req.query.category) {
            query.category = req.query.category;
        }
        if (req.query.condition) {
            query.condition = req.query.condition;
        }
        if (req.query.age_years) {
            query.age_years = { $lte: parseInt(req.query.age_years) };
        }

        // Fetch filtered gifts
        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (e) {
        logger.error('Search failed', e);
        next(e);
    }
});

module.exports = router;
