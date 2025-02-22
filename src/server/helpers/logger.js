import winston from "winston";

let transports = [
    new winston.transports.File({
        filename: "error.log",
        level: "error",
    }),
    new winston.transports.File({
        filename: "verbose.log",
        level: "verbose",
    }),
];

if (process.env.NODE_ENV === "production") {
    transports.push(new winston.transports.Console());
}

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: transports,
})

export default logger;