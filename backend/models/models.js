const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const { INTEGER, STRING } = DataTypes;

const AutorsBoock = sequelize.define('AutorsBoock', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title:  { type: STRING, allowNull: false },
    price: { type: INTEGER, allowNull: false },
    description: { type: STRING, allowNull: false },
    type_boock: { type: STRING, allowNull: false },
    url_title: { type: STRING, allowNull: false },
})

const Trusted = sequelize.define('Trusted', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: STRING, allowNull: false },
    company_name: { type: STRING, allowNull: false },
    url_title: { type: STRING, allowNull: false },
})

const Learn = sequelize.define('Learn', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: STRING, allowNull: false }
})

const ArticleRecources = sequelize.define('ArticleRecources', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: STRING, allowNull: false },
    description: { type: STRING, allowNull: false },
    date: { type: STRING, allowNull: false },
    url_title: { type: STRING, allowNull: false },
})

module.exports = { AutorsBoock, Trusted, ArticleRecources ,Learn}