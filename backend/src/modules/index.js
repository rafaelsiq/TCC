
import streamerRoutes from './streamers/streamer.routes';
import sponsorRoutes from './sponsors/sponsor.routes';
import administratorRoutes from './administrators/administrator.routes';
import advertsementRoutes from './advertsements/advertsement.routes';

export default app => {
    app.use('/api/v1/streamers', streamerRoutes);
    app.use('/api/v1/sponsors', sponsorRoutes);
    app.use('/api/v1/adminstrators', administratorRoutes);
    app.use('/api/v1/sponsors/ads', advertsementRoutes);
};