// import { Table, Column, Model, DataType, HasOne, BelongsTo } from 'sequelize-typescript';
// import Role from "./role";
// import Order from './order';

// @Table({
//     tableName: "customers",
//     timestamps: false
// })
// export default class Customer extends Model {
//     @Column({
//         type: DataType.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     })
//     id!: number;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     name!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     surname!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     email!: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     password!: string;

//     @HasOne(() => Role)
//     role!: Role;

//     @BelongsTo(() => Order)
//     order!: Order;

// }

import { Model, Sequelize, DataTypes } from 'sequelize';
export default class Customer extends Model {
  public id?: number;
  public name!: string;
  public surname!: string;
  public email!: string;
  public password!: string;
}
export const CustomerMap = (sequelize: Sequelize) => {
    Customer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
  }, {
    sequelize,
    tableName: 'customers',
    modelName: "Customer",
    timestamps: false
  });
  Customer.sync();
}
