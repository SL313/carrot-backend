import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export default class School extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(80))
  name: string;
}
