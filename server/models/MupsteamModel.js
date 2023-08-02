import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Mupsteam = db.define('Mupsteam', {
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
  PLC_BPV_MAKE_UP_STEAM__commStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM__commOperation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Make_Up_AM: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Blow_Off_AM: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Tekanan_Boiler: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Tekanan_BPV: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Setpoint_BPV: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Setpoint_Blow_Off: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Status_Boiler: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Status_BPV: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Output_MUP: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Output_BOFF: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Water_Animation_MUP: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Water_Animation_Boff: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Water_Ani_BPV_High: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BPV_MAKE_UP_STEAM_Tekanan_Out_MakeUp: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'mupsteam',
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8',
});

export default Mupsteam;
