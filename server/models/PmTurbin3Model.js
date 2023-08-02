import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PmTurbin3 = db.define('PmTurbin3', {
  _id: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  _dbTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  _terminalTime: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  _groupName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3__commStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3__commOperation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Line_Volt_AB1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Line_Volt_BC1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Line_Volt_AC1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Phase_Current_A1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Phase_Current_B1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Phase_Current_C1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Total_Active_Power1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Total_Power_Factor1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Frequency1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Turbin3_Total_KWH1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'pmturbin3',
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8',
});

export default PmTurbin3;
