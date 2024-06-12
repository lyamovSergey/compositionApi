import { NAV_ITEMS } from './constants'
export function selectOptionsIsValid(options) {
  return options.every(({ value, label }) => typeof value == 'number' && typeof label === 'string')
}
export function currentPageIsValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}
