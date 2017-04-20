import { observable, computed, action } from 'mobx'

interface IStore {
  count: number,
  add(): void
}

class Store implements IStore {

  @observable private id: number

  constructor({ id = 3 }) {
    this.id = id
  }

  @computed
  get count() {
    return this.id
  }

  @action.bound
  add() {
    this.id++
  }
}

export {
  Store as default
}