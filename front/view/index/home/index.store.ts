import { observable, computed, action } from 'mobx'

interface IStore {
  count: number,
  add(): void
}

class HomeStore implements IStore {

  @observable id = 0

  constructor({ id = 3 }) {
    this.id = id
  }

  @computed
  get count() {
    return this.id
  }

  @action
  add = () => {
    this.id++
  }
}

interface Props {
  title?: string,
  store: IStore
}

const Store = (props: any) => {
  const store = new HomeStore(props)
  return {
    title: 'square',
    store
  }
}

export {
  Store as default,
  Props
}
