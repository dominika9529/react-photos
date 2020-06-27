import apiFetch from './apiFetch';
import fillPath from '../utils/fillPath';

const SECTION_PATH = '/collections/:id/photos';

export default (params, success) =>
  apiFetch(fillPath(SECTION_PATH, params))
  .then(res => res.json())
  .then(success);
