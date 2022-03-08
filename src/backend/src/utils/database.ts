import { Sequelize } from 'sequelize';

// localhost

const sequelize = new Sequelize('english', 'postgres', 'pass', {
    dialect: 'postgres',
    host: 'host.docker.internal',
    logging: false
});

// production

// const sequelize = new Sequelize(<string>process.env["DATABASE_NAME"], <string>process.env["DATABASE_USER"], <string>process.env["DATABASE_PASSWORD"], {
//     dialect: 'postgres',
//     host: <string>process.env["DATABASE_HOST"],
//     logging: false
// });

export default sequelize;
