import { requestWatcher } from './utils';

let landingWatcher;

export function watchLanding() {
  landingWatcher = requestWatcher.watch('/api/task?status=Running');
  return landingWatcher;
}

export function unwatchLanding() {
  if (landingWatcher) {
    landingWatcher.stop();
  }
}
