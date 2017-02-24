import * as React from 'react'
import { mixin } from 'lib/mixin'

interface Props {
  user: string,
  store: any
}

const View = ({ user, store }: Props) => {
  return (
    <div>hi {user}, {store.title}</div>
  )
}

export default mixin(View, {
  title: 'square'
})
