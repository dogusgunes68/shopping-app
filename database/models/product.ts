// import { Table, Column, Model, DataType, BelongsTo } from 'sequelize-typescript';
// import Order from './order';

// @Table({
//     tableName: "products",
//     timestamps: false
// })
// export default class Product extends Model {
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
//         type: DataType.INTEGER,
//         allowNull: false,
//     })
//     price!: number;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     description!: string;

//     @BelongsTo(() => Order)
//     order!: Order;

// }

import { Model, Sequelize, DataTypes } from 'sequelize';
export default class Product extends Model {
  public id?: number;
  public name!: string;
  public price!: number;
  public description!: string;
}
export const ProductMap = (sequelize: Sequelize) => {
    Product.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    
  }, {
    sequelize,
    tableName: 'products',
    modelName: "Product",
    timestamps: false
  });
  Product.sync();
}
