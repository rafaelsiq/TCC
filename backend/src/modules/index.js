import streamerRoutes from './streamers/streamer.routes';
import sponsorRoutes from './sponsors/sponsor.routes';
import administratorRoutes from './administrators/administrator.routes';
import advertsementRoutes from './advertsements/advertsement.routes';
import httpStatus from 'http-status';

const cors = require('cors');

export default app => {
  const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
    optionSuccessStatus: httpStatus.OK,
  }

  app.use(cors(corsOptions));
  app.use('/api/v1/streamers', streamerRoutes);
  app.use('/api/v1/sponsors', sponsorRoutes);
  app.use('/api/v1/adminstrators', administratorRoutes);
  app.use('/api/v1/sponsors/ads', advertsementRoutes);
};
