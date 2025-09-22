const express = require('express');
const pool = require('../db');
const axios = require('axios');
const router = express.Router();

// GET /api/quotes/random
router.get('/random', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM quotes ORDER BY RAND() LIMIT 1');
    if (rows.length) return res.json(rows[0]);
    // fallback: fetch from external API if DB empty
    const r = await axios.get(`${process.env.EXTERNAL_API}/random`);
    return res.json({ author: r.data.author, content: r.data.content, source: 'external' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/quotes/author/:name
router.get('/author/:name', async (req, res) => {
  try {
    const name = `%${req.params.name}%`;
    const [rows] = await pool.query('SELECT * FROM quotes WHERE author LIKE ? ORDER BY id DESC', [name]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
