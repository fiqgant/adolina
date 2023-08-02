import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Boiler2 = db.define('Boiler2', {
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
  PLC_BOILER_2__commStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2__commOperation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Mode_FDD: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Mode_IDD: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Mode_WLCV: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_StatusValve_StartingValve: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_WaterLevel_HL: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_WaterLevel_LL: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_WaterLevel_XL: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_IDF: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_FDF: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_SecFan: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_DraftControl: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_DustCollector1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_DustCollector2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_RotaryFeeder: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_AirComp: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_Run_FWP1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalPV_WLTX: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalPV_WFTX: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalPV_SFTX: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalPV_PTX: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalPV_OGTTX: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_SetPoint_FDD: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_SetPoint_IDD: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_SetPoint_WLCV: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalOut_FDD: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalOut_IDD: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalOut_WLCV: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_SetPoint_FuelGate1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_StatusValve_FuelGate1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_BOILER_2_FinalPV_SHTTX: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'boiler2',
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8',
});

export default Boiler2;
