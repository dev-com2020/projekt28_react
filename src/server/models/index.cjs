'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0 && file !== basename && file.slice(-4) === '.cjs' && file.indexOf('.test.js') === -1);
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';
// import { fileURLToPath } from 'url';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// export default (sequelize) => {
//     let db = {};
//
//     // Pobranie wszystkich plików modeli
//     fs.readdirSync(__dirname)
//         .filter((file) => file.endsWith('.js') && file !== 'index.cjs')
//         .forEach((file) => {
//             import(path.join(__dirname, file)).then((module) => {
//                 const model = module.default(sequelize, Sequelize.DataTypes);
//                 db[model.name] = model;
//             });
//         });
//
//     // Obsługa relacji (associations)
//     Object.keys(db).forEach((modelName) => {
//         if (db[modelName].associate) {
//             db[modelName].associate(db);
//         }
//     });
//
//     return db;
// };

// import Sequelize from 'sequelize';
// if (process.env.NODE_ENV === 'development') {
//     require('babel-plugin-require-context-hook/register')()
// }
//
// export default (sequelize) => {
//     let db = {};
//
//     const context = require.context('.', true, /^\.\/(?!index\.js).*\.js$/, 'sync')
//     context.keys().map(context).forEach(module => {
//         const model = module(sequelize, Sequelize);
//         db[model.name] = model;
//     });
//
//     Object.keys(db).forEach((modelName) => {
//         if (db[modelName].associate) {
//             db[modelName].associate(db);
//         }
//     });
//
//     return db;
// };
