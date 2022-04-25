import passport from 'passport';
import LocalStrategy from 'passport-local';
import Streamer from '../modules/streamers/streamer.model';
import Sponsor from '../modules/sponsors/sponsor.model';
import Administrator from '../modules/administrators/administrator.model';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import constants from '../config/constants';

const localOpts = {
    usernameField: 'email',
};
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),
    secretOrKey: constants.JWT_SECRET,
};

const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const streamer = await User.findOne({
            email
        });
        const sponsor = await User.findOne({
            email
        });
        const administrator = await User.findOne({
            email
        });
        const user = (!Streamer ? streamer : Administrator ? administrator : Sponsor ? sponsor : undefined)
        if (!user) {
            return done(null, false);
        } else if (!user.authenticateUser(password)) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
});
const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    try {
        const streamer = await User.findOne({
            email
        });
        const sponsor = await User.findOne({
            email
        });
        const administrator = await User.findOne({
            email
        });
        const user = (!Streamer ? streamer : Administrator ? administrator : Sponsor ? sponsor : undefined)

        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
});


passport.use(localStrategy);
passport.use(jwtStrategy);

export const authLocal = passport.authenticate('local', { session: false });
export const authJwt = passport.authenticate('jwt', { session: false });