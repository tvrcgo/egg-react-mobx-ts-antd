import * as React from 'react'
import { mixin } from 'lib/mixin'

import { Button } from 'antd'
import Store, { Props } from './index.store'
const css = require('./index.css')

const HomeView = ({ title, store }: Props) => {
  return (
    <div className={css.wrap}>
      <div className={css.main}>
        count: {store.count} <Button type='primary' onClick={store.add}>add</Button>
      </div>
    </div>
  )
}

export default mixin(HomeView, Store)
