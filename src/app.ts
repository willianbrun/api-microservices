import express, { Application } from "express"
import cors from "cors"
import routerUsuario from "./routes/userRoute"
import routerTask from "./routes/taskRoute"
import routerLogin from "./routes/loginRoute"
import errorHandler from "./middleware/errorHandler"
import logger from "./middleware/logger"
import { v4 as uuidv4 } from "uuid"
import notFound from "./errors/not-found"

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use((req, res, next) =>
{
    const id = uuidv4()
    logger.info(`A req: ${id} Verbo: ${req.method} Path: ${req.path}`)
    req.params.id = id
    next()
})

app.use("/api", routerUsuario)
app.use("/api", routerLogin)
app.use("/api", routerTask)

app.use(notFound)
app.use(errorHandler);

export default app