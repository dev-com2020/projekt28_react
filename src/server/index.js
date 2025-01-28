import express from 'express'
import compress from 'compression'
import helmet from "helmet";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.join(__dirname,'../../' );

// const port = process.env.PORT || 3000
app.use(compress())

    app.use(helmet())
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "'unsafe-inline'","*.githubusercontent.com"],
        }
    }))
    app.use(helmet.referrerPolicy({policy: 'same-origin'}))

app.use(cors())
app.use('/uploads', express.static(path.join(root,'uploads')))
app.use('/', express.static(path.join(root,'dist/')))


app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'dist/index.html'))
})

app.listen(8888,()=>console.log('Listening on 8888'))
