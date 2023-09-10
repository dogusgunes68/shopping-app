// import { Table, Column, Model, DataType, HasMany, HasOne } from 'sequelize-typescript';
// import Product from './product';
// import Customer from './customer';

// @Table({
//     tableName: "orders",
//     timestamps: false
// })
// export default class Order extends Model {
//     @Column({
//         type: DataType.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     })
//     id!: number;

//     @Column({
//         type: DataType.INTEGER,
//         allowNull: false,
//     })
//     count!: number;

//     @HasMany(() => Product)
//     product!: Product[];

//     @HasOne(() => Customer)
//     customer!: Customer;
// }

import { Model, Sequelize, DataTypes } from 'sequelize';
export default class Order extends Model {
  public id?: number;
  public count!: number;
}
export const OrderMap = (sequelize: Sequelize) => {
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
  }, {
    sequelize,
    tableName: 'orders',
    modelName: "Order",
    timestamps: false
  });
  Order.sync();
}
