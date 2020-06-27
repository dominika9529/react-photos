import apiFetch from './apiFetch';
import fillPath from '../utils/fillPath';

const SECTIONS_PATH = '/collections';

export default (params, success) =>
  apiFetch(fillPath(SECTIONS_PATH, params))
  .then(res => res.json())
  .then(success);
