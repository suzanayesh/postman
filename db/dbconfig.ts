import { DataSource } from "typeorm";

import { Permission } from "./entities/Permission.js";
import { Profile } from "./entities/Profile.js";
import { Role } from "./entities/Role.js";
import { User } from "./entities/User.js";

console.log(process.env.DB_HOST);
const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Profile,
    Permission,
    Role,
    User
  ],
  migrations: ['./**/migration/*.ts'],
  synchronize: true,
  logging: false

});
// export const initDB = async () =>
//   await dataSource.initialize().then(() => {
//     console.log("Connected to DB!");
//   }).catch(err => {
//     console.error('FFailed to connect to DB: ' + err);
//   });

export default dataSource;