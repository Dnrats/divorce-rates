import express from 'express';
import mysql from 'mysql';
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
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
  connection.release();
});

// API endpoint to fetch data
app.get('/api/data', (req, res) => {
  pool.query('SELECT * FROM TABLE 1', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to Divorce Rates Worldwide');
});

module.exports = app;

export const handler = async (event, context) => {
  return app(event, context);
};
