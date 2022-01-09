import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export default class Article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @Column(DataType.STRING(128))
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.STRING(2048))
  image: string;

  @Column(DataType.STRING)
  location: string;

  @Column(DataType.INTEGER)
  price: bigint;

  @Column(DataType.BOOLEAN)
  isAdjustable: boolean;
}
