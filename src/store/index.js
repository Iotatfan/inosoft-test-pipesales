import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "http://127.0.0.1:8000/api/pipes"

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

const actions = {
  getPipes({ commit, dispatch }) {
    axios.get(url)
      .then(res => {
        commit('SET_PIPES', res.data)
        dispatch('getProductTypes')
        dispatch('getGrade')
        dispatch('getSize')
        dispatch('getConnection')
      })
      .catch(er => {
        console.log(er)
      })
  },
  getProductTypes({ commit }) {
    commit('SET_PRODUCT_TYPE', calculateFilter(state.pipes, state.productType.name))
  },
  getGrade({ commit }) {
    let temp = state.pipes.filter((pipe) => {
      return (state.filters.productType ? state.filters.productType === pipe.productType : true)
    })

    commit('SET_GRADE', calculateFilter(temp, state.grade.name))
  },
  getSize({ commit }) {
    let temp = state.pipes.filter((pipe) => {
      return (
        state.filters.productType ? state.filters.productType === pipe.productType : true)
        && (state.filters.grade ? state.filters.grade === pipe.grade : true
        )
    })

    commit('SET_SIZE', calculateFilter(temp, state.size.name))
  },
  getConnection({ commit }) {
    let temp = state.pipes.filter((pipe) => {
      return (
        state.filters.productType ? state.filters.productType === pipe.productType : true)
        && (state.filters.grade ? state.filters.grade === pipe.grade : true
          && (state.filters.size ? state.filters.size === pipe.size : true)
        )
    })

    commit('SET_CONNECTION', calculateFilter(temp, state.connection.name))
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
      else if (target != -1 && index > target && value) {
        state.filters[key] = null
      }
    })
  }
}

function calculateFilter(arr, key) {
  let counter = {}

  const result = new Set(arr.map(value => {
    if (value[key] in counter) {
      counter[value[key]] += 1
    }
    else {
      counter[value[key]] = 1
    }
    return value[key]
  }))

  const payload = {
    contents: Array.from(result),
    amount: counter
  }

  return payload
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
