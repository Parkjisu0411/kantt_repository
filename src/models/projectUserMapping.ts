'use strict'

import { Model } from 'sequelize'
import { sequelize } from './index'
const { DataTypes } = require('sequelize')

export class ProjectUserMapping extends Model {
    public userId!: number
    public projectId!: string

    public readonly createdAt!: Date
    public readonly updatedAt: Date | undefined
}

ProjectUserMapping.init(
    {
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER,
            references: { model: 'user_', key: 'id' },
            onDelete: 'CASCADE',
        },
        projectId: {
            field: 'project_id',
            type: DataTypes.INTEGER,
            references: { model: 'project', key: 'id' },
            onDelete: 'CASCADE',
        }
    },
    {
        sequelize,
        modelName: 'ProjectUserMapping',
        tableName : 'project_user_mapping',
        freezeTableName : true,
        timestamps : true,
        updatedAt : 'updateTimestamp'
    }
)
