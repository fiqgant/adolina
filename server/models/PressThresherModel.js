import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PressThresher = db.define('PressThresher', {
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
  PLC_PRESS_THRESHER__commStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER__commOperation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Press1_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Digester1_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Press2_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Digester2_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Press3_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Digester3_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Press4_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Digester4_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Thresher1_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Thresher2_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Thresher3_Run: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Press1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Digester1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Press2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Digester2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Press3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Digester3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Press4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Digester4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Temp_Digester1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Temp_Digester2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Temp_Digester3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Temp_Digester4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Level_Digester1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Level_Digester2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Level_Digester3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Level_Digester4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Thresher1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Thresher2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Ampere_Thresher3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Alarm_Status_D1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Alarm_Status_D2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Alarm_Status_D3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_Alarm_Status_D4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_P1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_D1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_P2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_D2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_D3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_P3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_P4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_PRESS_THRESHER_HM_D4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'pressthresher',
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8',
});

export default PressThresher;
