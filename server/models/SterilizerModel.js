import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Sterilizer = db.define('Sterilizer', {
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
  PLC_STERILIZER__commStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER__commOperation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Inlet: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Exhaust: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Condenssate: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Mode: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Door: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Status: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_ProgNo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_ProgTimeM: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_ProgTimeSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_StepNo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_StepRemain: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_TotalRemMin: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_TotalRemSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Press: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S1_Temp: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Inlet: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Exhaust: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Cond: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Mode: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Door: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Status: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_ProgNo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_ProgTimeMin: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_ProgTimeSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_StepNo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_StepRemain: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_TotalRemMin: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_TotalRemSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Press: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S2_Temp: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Inlet: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Exhaust: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Cond: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Mode: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Door: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Status: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_ProgNo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_ProgTimeMin: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_ProgTimeSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_StepNo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_StepRemain: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_TotalRemMin: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Press: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_TotalRemSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_STERILIZER_S3_Temp: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  CloudOnline: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'sterilizer',
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8',
});

export default Sterilizer;
