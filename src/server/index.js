import express from 'express'
import compress from 'compression'
import helmet from "helmet";
import cors from "cors";
import path from "path";
import {fileURLToPath} from 'url';
import services from "./services/index.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.join(__dirname, '../../');

app.use(compress())
if (process.env.NODE_ENV === 'production') {
    app.use(helmet())
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "'unsafe-inline'", "*.githubusercontent.com"],
        }
    }))
    app.use(helmet.referrerPolicy({policy: 'same-origin'}))
}
app.use(cors())
app.use('/uploads', express.static(path.join(root, 'uploads')))
app.use('/', express.static(path.join(root, 'dist/')))


app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'dist/index.html'))
})

const serviceNames = Object.keys(services)

for (let i = 0; i < serviceNames.length; i += 1) {
    const name = serviceNames[i]
    if (name === 'graphql') {
        (async () => {
            await services[name].start()
            services[name].applyMiddleware({app})
        })()
    } else {
        app.use(`/${name}`, services[name])
    }
}

app.listen(8888, () => console.log('Listening on 8888'))
