import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import { authLocal } from '../services/auth.services'
import { authJwt } from '../services/auth.services'
import streamersRoutes from '../modules/streamers/streamer.routes';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default app => {
    if (isProd) {
        app.use(compression());
        app.use(helmet());
    }
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use('/api/v1/streamers', streamersRoutes);
    if (isProd) {
        app.use(authJwt.initialize());
    }
    
    if (isDev) {
        app.use(morgan('dev'));
    }
};