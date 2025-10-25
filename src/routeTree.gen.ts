import type { AnyRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import { Route as lucyRoute } from './routes/lucy'
import { Route as ebookMachineRoute } from './routes/ebook-machine'

export const routeTree: AnyRoute = rootRoute.addChildren([
  indexRoute,
  lucyRoute,
  ebookMachineRoute,
])

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': unknown
    '/lucy': unknown
    '/ebook-machine': unknown
  }
}