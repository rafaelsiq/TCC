import userRoutes from './users/user.routes';
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
  
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/sponsors/ads', advertsementRoutes);
};
