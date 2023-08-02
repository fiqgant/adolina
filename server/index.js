import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import DeviceRoute from "./routes/DeviceRoute.js";
import AuthRoute from "./routes/AuthRoutes.js";
import Boiler1Routes from './routes/Boiler1Routes.js';
import Boiler2Routes from './routes/Boiler2Routes.js';
import KlarifikasiRoutes from './routes/KlarifikasiRoute.js';
import MupsteamRoutes from './routes/MupsteamRoute.js';
import PmGenset1Routes from './routes/PmGenset1Route.js';
import PmTurbin2Routes from "./routes/PmTurbin2Route.js";
import PmTurbin3Routes from "./routes/PmTurbin3Route.js";
import PressThresherRoutes from "./routes/PressThresherRoute.js";
import SterilizerRoutes from "./routes/SterilizerRoute.js"

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({origin:true,credentials: true}));

app.use(express.json());
app.use(UserRoute);
app.use(DeviceRoute);
app.use(AuthRoute);
app.use(Boiler1Routes);
app.use(Boiler2Routes);
app.use(KlarifikasiRoutes);
app.use(MupsteamRoutes);
app.use(PmGenset1Routes);
app.use(PmTurbin2Routes);
app.use(PmTurbin3Routes);
app.use(PressThresherRoutes);
app.use(SterilizerRoutes);

// store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});