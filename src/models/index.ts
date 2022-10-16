'use strict'

const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../../config/config.json')[env]

export const sequelize = new Sequelize(
	config.database, 
	config.username, 
	config.password, 
	{
		host: config.host,
		dialect: 'postgres',
		freezeTableName: true
	}
);
