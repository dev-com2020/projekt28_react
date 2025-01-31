import Sequelize from "sequelize";

const sequelize = new Sequelize('graphbook','root','admin123', {
    host: 'graphbook.cvsk8888uclg.eu-north-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    poll: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 30000,
    }
})

export default sequelize;