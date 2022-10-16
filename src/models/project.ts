'use strict'

import { Model } from 'sequelize'
import { sequelize } from './index'
import { User } from './user';
const { DataTypes } = require('sequelize')

export class Project extends Model {
    public id!: number
    public name!: string
    public description!: string
    public readonly createdAt!: Date
    public readonly updatedAt: Date | undefined
}

Project.init(
    {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(4000),
        }
    },
    {
        sequelize,
        modelName: 'Project',
        tableName : 'project',
        freezeTableName : true,
        timestamps : true,
        updatedAt : 'updateTimestamp'
    }
)

Project.belongsToMany(User, {
    through: 'project_user_mapping'
})
