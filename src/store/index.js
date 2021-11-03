import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  pipes: [],
  filters: {
    productType: null,
    grade: null,
    size: null,
    connection: null
  },
  productType: {
    name: 'productType',
    contents: [],
    amount: {}
  },
  grade: {
    name: 'grade',
    contents: [],
    amount: {}
  },
  size: {
    name: 'size',
    contents: [],
    amount: {}
  },
  connection: {
    name: 'connection',
    contents: [],
    amount: {}
  }
}

const getters = {}

const actions = {
  getPipes({ commit, dispatch }) {
    axios.get('PipesData.json')
      .then(res => {
        commit('SET_PIPES', res.data)
        dispatch('getProductTypes')
        dispatch('getGrade')
        dispatch('getSize')
        dispatch('getConnection')
      })
  },
  getProductTypes({ commit }) {
    let counter = {}

    let productType = new Set(state.pipes.map(value => {
      if (value.productType in counter) {
        counter[value.productType] += 1
      }
      else {
        counter[value.productType] = 1
      }
      return value.productType
    }))

    const payload = {
      contents: Array.from(productType),
      amount: counter
    }

    commit('SET_PRODUCT_TYPE', payload)
  },
  getGrade({ commit }) {
    let counter = {}

    let temp = state.pipes.filter((pipe) => {
      return (state.filters.productType ? state.filters.productType === pipe.productType : true)
    })

    let grade = new Set(temp.map(value => {
      if (value.grade in counter) {
        counter[value.grade] += 1
      }
      else {
        counter[value.grade] = 1
      }
      return value.grade
    }))

    const payload = {
      contents: Array.from(grade),
      amount: counter
    }

    commit('SET_GRADE', payload)
  },
  getSize({ commit }) {
    let counter = {}

    let temp = state.pipes.filter((pipe) => {
      return (
        state.filters.productType ? state.filters.productType === pipe.productType : true)
        && (state.filters.grade ? state.filters.grade === pipe.grade : true
        )
    })
    let size = new Set(temp.map(value => {
      if (value.size in counter) {
        counter[value.size] += 1
      }
      else {
        counter[value.size] = 1
      }
      return value.size
    }))

    const payload = {
      contents: Array.from(size),
      amount: counter
    }

    commit('SET_SIZE', payload)
  },
  getConnection({ commit }) {
    let counter = {}

    let temp = state.pipes.filter((pipe) => {
      return (
        state.filters.productType ? state.filters.productType === pipe.productType : true)
        && (state.filters.grade ? state.filters.grade === pipe.grade : true
          && (state.filters.size ? state.filters.size === pipe.size : true)
        )
    })

    let connection = new Set(temp.map(value => {
      if (value.connection in counter) {
        counter[value.connection] += 1
      }
      else {
        counter[value.connection] = 1
      }
      return value.connection
    }))

    const payload = {
      contents: Array.from(connection),
      amount: counter
    }

    commit('SET_CONNECTION', payload)
  },
  updateFilter({ commit, dispatch }, payload) {
    commit('SET_FILTERS', payload)
    dispatch('getGrade')
    dispatch('getSize')
    dispatch('getConnection')
  }
}

const mutations = {
  SET_PIPES(state, pipes) {
    state.pipes = pipes
  },
  SET_PRODUCT_TYPE(state, { contents, amount }) {
    state.productType.contents = contents
    state.productType.amount = amount
  },
  SET_GRADE(state, { contents, amount }) {
    state.grade.contents = contents
    state.grade.amount = amount
  },
  SET_SIZE(state, { contents, amount }) {
    state.size.contents = contents
    state.size.amount = amount
  },
  SET_CONNECTION(state, { contents, amount }) {
    state.connection.contents = contents
    state.connection.amount = amount
  },
  SET_FILTERS(state, { name, value }) {
    state.filters[name] = value

    let keys = Object.keys(state.filters)
    let target = -1

    keys.forEach((key, index) => {
      if (key === name) {
        target = index
      }
      else if (target != -1 && index > target) {
        state.filters[key] = null
      }
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
