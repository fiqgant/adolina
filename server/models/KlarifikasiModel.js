import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Klarifikasi = db.define('Klarifikasi', {
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
  PLC_KLARIFIKASI__commStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI__commOperation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Oil_Separator1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Oil_Separator2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Oil_Separator3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Oil_Separator4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_5: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_6: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_7: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_8: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Motoran_9: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Ampere_OS1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Ampere_OS2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Ampere_OS3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Ampere_OS4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_HRM_OS1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_HRM_OS2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_HRM_OS3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_HRM_OS4: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Suhu_CST1: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Suhu_CST2: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Suhu_CST3: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator1_Hr: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator1_Min: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator1_Sec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator2_Hr: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator3_Hr: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator2_Min: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator2_Sec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator3_Min: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator3_Sec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator4_Hr: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator4_Min: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_SludgeSeparator4_Sec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_slugeSeparator5_Hr: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_slugeseparatort5_min: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_slugeseparator5_sec: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_Ampere_OS5: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  PLC_KLARIFIKASI_HRM_OS5: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'klarifikasi',
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8',
});

export default Klarifikasi;
