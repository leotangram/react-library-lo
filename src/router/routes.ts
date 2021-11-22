import { lazy, LazyExoticComponent } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  path: string
  to: string
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
)
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
)
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
)

export const routes: Route[] = [
  {
    Component: LazyLayout,
    name: 'Lazy Layout',
    path: '/lazy-layout/*',
    to: '/lazy-layout/'
  },
  {
    Component: NoLazy,
    name: 'No Lazy',
    path: 'no-lazy',
    to: '/no-lazy'
  }
]
