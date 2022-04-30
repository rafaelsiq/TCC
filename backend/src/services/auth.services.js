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
      let found = false;
      const streamer = await Streamer.findOne({ email });
      const sponsor = await Sponsor.findOne({ email });
      const administrator = await Administrator.findOne({ email });
      [streamer, sponsor, administrator].forEach(item => {
        if (!item) {
          found = false
        } else {
          found = true
        }
        if (found) {
          if (!item.authenticateUser(password)) { return done(null, false) }
          else { return done(null, item) }
        }
      })
      return done(null, false)
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
    let found = false;
    const streamer = await Streamer.findById(payload.id);
    const sponsor = await Sponsor.findById(payload.id);
    const administrator = await Administrator.findById(payload.id);
    [streamer, sponsor, administrator].forEach(item => {
      if (!item)
        found = false;
      else
        return done(null, item);
    })
    return done(null, false);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

export const authLocal = passport.authenticate('local', { session: false });
export const authJwt = passport.authenticate('jwt', { session: false });
