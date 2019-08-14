// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3',
		},
		// required for sqlite
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// RULE: EVERY SCHEMA CHANGE NEEDS A NEW MIGRATION
// npx knex init
// npx knex migrate:make <name of data table (cars_table)>
// npx knex migrate:latest
// npx knex migrate:rollback (to move back one update)
// npx knex seed:make <nameOfSeed (001_cars)>
// npx knex seed:run