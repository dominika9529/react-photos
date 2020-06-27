import apiFetch from './apiFetch';
import fillPath from '../utils/fillPath';

const PHOTO_PATH = '/photos/:id';

export default (params, success) =>
  apiFetch(fillPath(PHOTO_PATH, params))
  .then(res => res.json())
  .then(success);
