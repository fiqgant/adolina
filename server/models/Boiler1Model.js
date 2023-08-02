import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Boiler1 = db.define('Boiler1', {
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
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  _groupName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1__commStatus: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1__commOperation: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Mode_FDD: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Mode_IDD: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Mode_WLCV: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_WaterLevel_HL: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_WaterLevel_LL: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_WaterLevel_XL: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Status_valve_StartingValve: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_IDF: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_FDF: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_SecFan: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_DrafControl: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_DustCollector1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_DustCollector2: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_RotaryFeeder: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_AirComp: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Run_FWP1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalPV_WLTX: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalPV_WFTX: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalPV_SFTX: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalPV_PTX: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalPV_SHTTX: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalPV_OGTTX: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_SetPoint_FDD: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_SetPoint_IDD: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_SetPoint_WLCV: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalOut_FDD: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalOut_IDD: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_FinalOut_WLCV: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_Status_Valve_FG1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  PLC_BOILER_1_SetPoint_FG1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  tes: {
    type: DataTypes.INTEGER(255),
    allowNull: true,
  },
}, {
  tableName: 'boiler1',
  timestamps: false,
});

export default Boiler1;
