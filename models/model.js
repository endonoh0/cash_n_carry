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
        return this.pool.query(query);
        // .then(res => res.rows);
    }

    async insert(columns, values, res) {
        let numOfValues = "";
        for (let i = 0; i < values.length; i++) {
            numOfValues += `$${i + 1}`;
            if (i + 1 !== values.length) {
                numOfValues += `, `;
            }
        }
        const query = `
          INSERT INTO ${this.table} (${columns})
          VALUES (${numOfValues})
          RETURNING *;
      `;
        this.pool.query(query, values).then((res) => res.rows);
    //     const query = `
    //     INSERT INTO ${this.table} (${columns})
    //     VALUES (${values})
    //     RETURNING *;
    // `;
    //   this.pool.query(query).then((res) => res.rows);
    }
}

module.exports = { Model };
