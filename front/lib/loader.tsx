import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

interface ILoader {
  router(routes?: IRoute[]): void
  run(container: HTMLElement | null): void
}

interface ILoaderConfig {
  entry?: string,
  routes?: IRoute[]
}

interface IRoute {
  view: string
  path: string
  component?: React.ReactElement<any>
  children?: IRoute[]
}

export default class Loader implements ILoader {

  private $config: ILoaderConfig
  private $router: any

  constructor(config: ILoaderConfig = {}) {
    this.$config = config
  }

  router(routes?: IRoute[]) {
    const loop = (route: IRoute) => {
      const entry = this.$config.entry || ''
      const routeView = entry ? `${entry}/${route.view}` : route.view
      const viewLoader = (require as any).context('view', true, /index$/)
      const view = viewLoader(`./${routeView}/index`)
      return {
        path: route.path,
        component: route.component || view.default,
        childRoutes: route.children && route.children.map(route => loop(route))
      }
    }
    const $routes = (routes || this.$config.routes || new Array<IRoute>()).map(route => loop(route))
    this.$router = (
      <Router history={hashHistory} routes={$routes} />
    )
  }

  run(container: HTMLElement | null) {
    if (!this.$router) {
      this.router()
    }
    render(this.$router, container)
  }
}
