import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import Streamer from '../modules/streamers/streamer.model';
import Sponsor from '../modules/sponsors/sponsor.model';
import Administrator from '../modules/administrators/administrator.model';


import constants from '../config/constants';

const localOpts = {
  usernameField: 'email',
};

const localStrategy = new LocalStrategy(
  localOpts,
  async (email, password, done) => {
    try {
      const streamer = await Streamer.findOne({ email });
      const sponsor = await Sponsor.findOne({ email });
      const administrator = await Administrator.findOne({ email });
      let user = null;
      [streamer, sponsor, administrator].forEach(item => {
        if (item != null) {
          user = item;
        }
      })
      if (!user) {
        return done(null, false)
      } else
        if (!user.authenticateUser(password)) { return done(null, false) }
        else { return done(null, user) }
    } catch (e) {
      return done(e, false);
    }
  },
);

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader('authorization'),
  secretOrKey: constants.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    const streamer = await Streamer.findById(payload.id);
    const sponsor = await Sponsor.findById(payload.id);
    const administrator = await Administrator.findById(payload.id);
    let user = null;
    [streamer, sponsor, administrator].forEach(item => {
      if (item != null)
        user = item;
    })
    if (!user) { return done(null, false) }
    else { return done(null, user) }
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

export const authLocal = passport.authenticate('local', { session: false });
export const authJwt = passport.authenticate('jwt', { session: false });
