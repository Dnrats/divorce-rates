const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// API endpoint to fetch data
app.get('/api/data', (req, res) => {
  pool.query('SELECT * FROM your_table_name', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
