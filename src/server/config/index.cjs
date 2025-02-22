module.exports = {
    "development": {
        "username": "root",
        "password": "admin123",
        "database": "graphbook",
        "host": "graphbook.cvsk8888uclg.eu-north-1.rds.amazonaws.com",
        "dialect": "mysql",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    },
    "production": {
        "host": process.env.host,
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "logging": false,
        "dialect": "mysql",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    }
}