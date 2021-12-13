export function isValidKey(key: string | symbol | number, object: object): key is keyof object {
  return key in object
}