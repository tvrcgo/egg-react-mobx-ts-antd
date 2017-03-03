import * as React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

// mix view component and stores
const mixin = (View: React.StatelessComponent<any>, Store: any) => {
  return observer(class ViewComponent extends React.Component<any, any> {
    private store: any

    constructor(props: any) {
      super(props)
      this.store = observable({})
    }

    componentWillMount() {
      // init store with props
      this.store = typeof Store === 'function' ? new Store(this.props) : observable(Store)
    }

    render() {
      const ObView = observer(View)
      return (
        <ObView {...this.props} store={this.store} />
      )
    }
  })
}

export {
  mixin
}
