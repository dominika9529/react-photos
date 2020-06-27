import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from '../constants'

export default url => fetch(
  `${UNSPLASH_BASE_URL}${url}`,
  {
    headers: UNSPLASH_COMMON_HEADERS
  }
);
