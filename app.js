const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection configuration
const dbConfig = {
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
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
