import * as React from 'react'
import { observer } from 'mobx-react'

// mix view component and stores
const mixin = (View: any, Store: any) => {
  return observer(class ViewComponent extends React.Component<any, any> {
    private store: any

    constructor(props) {
      super(props)
      // init store with props
      this.store = typeof Store === 'function' ? Store(this.props) : Store
    }
    render() {
      View = observer(View)
      return (
        <View {...this.props} {...this.store} />
      )
    }
  })
}

export {
  mixin
}
