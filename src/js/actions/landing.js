import { LANDING_LOAD, LANDING_UNLOAD } from '../actions';
import { watchLanding, unwatchLanding } from '../api/landing';

export function loadLanding() {
  return dispatch => (
    watchLanding()
      .on('success',
        payload => dispatch({ type: LANDING_LOAD, payload })
      )
      .on('error',
        payload => dispatch({ type: LANDING_LOAD, error: true, payload })
      )
      .start()
  );
}

export function unloadLanding() {
  unwatchLanding();
  return { type: LANDING_UNLOAD };
}
