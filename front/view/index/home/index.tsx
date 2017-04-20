import * as React from 'react'
import { mixin } from 'lib/mixin'

import { Button } from 'antd'
import Store from './index.st'
import css from './index.css'
import Hello from 'component/Hello'

interface Props {
  title: string
  store: Store
}

const HomeView = ({ store }: Props) => {
  return (
    <div className={css.wrap}>
      <div className={css.main}>
        <Hello user='ts' />
        count: {store.count} <Button type='primary' onClick={store.add}>add</Button>
      </div>
    </div>
  )
}

export default mixin(HomeView, Store)
