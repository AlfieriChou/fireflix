import { camelCase } from 'lodash'

export interface ICamelObject {
  [s: string]: any
}

export const camelizeKeys = (
  obj: ICamelObject | ICamelObject[]
): ICamelObject | ICamelObject[] => {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v))
  }
  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key])
      }),
      {}
    )
  }
  return obj
}
