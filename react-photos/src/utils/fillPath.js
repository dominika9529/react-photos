export default (path, params) =>
  Object.entries(params).reduce(
    (accPath, [key, value]) => accPath.replace(`:${key}`, value),
    path
  );
