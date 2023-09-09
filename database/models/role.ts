// import { Table, Column, Model, DataType, BelongsTo } from 'sequelize-typescript';
// import Customer from './customer';

// @Table({
//     tableName: "roles",
//     timestamps: false
// })
// export default class Role extends Model {
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

//     @BelongsTo(()=> Customer)
//     customer!: Customer;

// }

import { Model, Sequelize, DataTypes } from 'sequelize';
export default class Role extends Model {
  public id?: number;
  public name!: string;
}
export const RoleMap = (sequelize: Sequelize) => {
  Role.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: false
  });
  Role.sync();
}



