import express, {Application} from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import routes from './routes';
import "dotenv/config";

const app: Application = express();
const port = config.get<string>('port');
const url = config.get<string>("dbUrl")

app.use('/api', routes);

app.listen(port, (): void => {
    log.info(`App started at http://localhost:${port}`);
    connectToDb(url);
});