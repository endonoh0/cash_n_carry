const { pool } = require('./pool');

class Model {
    constructor(table) {
        this.pool = pool;
        this.table = table;
        this.pool.on(
            'error',
            (err, client) => `Error, ${err}, on idle client${client}`
        );
    }

    async select(columns, clause) {
        let query = `SELECT ${columns} FROM ${this.table}`;
        if (clause) query += clause;
        return this.pool.query(query)
        // .then(res => res.rows);
    }

    async insert(columns, values, res) {
      const query = `
          INSERT INTO ${this.table} (${columns})
          VALUES (${values})
          RETURNING *;
      `;
      this.pool.query(query)
      .then(res => res.rows);
    }
}

module.exports = { Model };
