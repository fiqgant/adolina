import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PmGenset1 = db.define('PmGenset1', {
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
  PM_Genset1__commStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1__commOperation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Line_Volt_AB1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Line_Volt_BC1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Line_Volt_AC1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Phase_Current_A1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Phase_Current_B1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Phase_Current_C1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Total_Active_Power1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Total_Power_Factor1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Frequency1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PM_Genset1_Total_KWH1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  CloudOnline: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'pmgenset1',
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8',
});

export default PmGenset1;
