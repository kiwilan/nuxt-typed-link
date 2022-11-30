export const routes = {
  'about': {
    name: 'about',
    path: '/about',
    params: undefined,
  },
  'index': {
    name: 'index',
    path: '/',
    params: undefined,
  },
}
export type TypedRouteList =
  | 'about'
  | 'index'
export type TypedRouteParams = {
  'about': never
  'index': never
}
export interface RouteType {
  name: TypedRouteList
  params?: TypedRouteParams[TypedRouteList]
  query?: Record<string, string>
}
