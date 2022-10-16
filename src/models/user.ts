'use strict'

import { Model } from 'sequelize'
import { sequelize } from './index'
import { Project } from './project'
const { DataTypes } = require('sequelize')

export class User extends Model {
    public id!: number
    public email!: string
    public password!: string
    public name!: string
    public readonly createdAt!: Date
    public readonly updatedAt: Date | undefined
}

User.init(
    {
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName : 'user_',
        freezeTableName : true,
        timestamps : true,
        updatedAt : 'updateTimestamp'
    }
)

User.belongsToMany(Project, {
    through: 'project_user_mapping'
});
