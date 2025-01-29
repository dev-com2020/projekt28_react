import Sequelize from "sequelize";

const sequelize = new Sequelize('graphbook_dev','root','', {
    host: 'localhost',
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