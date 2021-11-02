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
    contents: []
  },
  grade: {
    name: 'grade',
    contents: []
  },
  size: {
    name: 'size',
    contents: []
  },
  connection: {
    name: 'connection',
    contents: []
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
    let productType = []
    // let count = {}

    state.pipes.forEach((pipe) => {
      // count[pipe.productType] !== undefined ? count[pipe.productType]++ : count[pipe.productType] = 1
      if (!productType.includes(pipe.productType)) {
        productType.push(pipe.productType);
      }
    });
    commit('SET_PRODUCT_TYPE', productType)
  },
  getGrade({ commit }) {
    let grade = []
    // let count = {}

    state.pipes.forEach((pipe) => {
      // count[pipe.grade] !== undefined ? count[pipe.grade]++ : count[pipe.grade] = 1
      if (!grade.includes(pipe.grade)) {
        isProductTypeFilter(grade, pipe, 'grade')
      }
    });
    // console.log(count)
    commit('SET_GRADE', grade)
  },
  getSize({ commit }) {
    let size = []
    state.pipes.forEach((pipe) => {
      if (!size.includes(pipe.size)) {
        if (!state.filters.productType && !state.filters.grade) {
          size.push(pipe.size);
        }
        else {
          isGradeFilter(size, pipe, 'size')
        }
      }
    });
    commit('SET_SIZE', size)
  },
  getConnection({ commit }) {
    let connection = []
    state.pipes.forEach((pipe) => {
      if (!connection.includes(pipe.connection)) {
        console.log(pipe.connection)
        if (!state.filters.productType && !state.filters.grade && !state.filters.size) {
          connection.push(pipe.connection);
        }
        else if (state.filters.size && pipe.size.includes(state.filters.size)) {
          isGradeFilter(connection, pipe, 'connection')
        }
        else if (!state.filters.size) {
          isGradeFilter(connection, pipe, 'connection')
        }
      }
    });
    commit('SET_CONNECTION', connection)
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
  SET_PRODUCT_TYPE(state, productType) {
    state.productType.contents = productType
  },
  SET_GRADE(state, grade) {
    state.grade.contents = grade
  },
  SET_SIZE(state, size) {
    state.size.contents = size
  },
  SET_CONNECTION(state, connection) {
    state.connection.contents = connection
  },
  SET_FILTERS(state, { name, value }) {
    state.filters[name] = value
  }
}

function isProductTypeFilter(arr, pipe, type) {
  if (state.filters.productType && pipe.productType.includes(state.filters.productType)) {
    arr.push(pipe[type])
  }
  else if (!state.filters.productType) {
    arr.push(pipe[type]);
  }
}

function isGradeFilter(arr, pipe, type) {
  if (state.filters.grade && pipe.grade.includes(state.filters.grade)) {
    isProductTypeFilter(arr, pipe, type)
  }
  else if (!state.filters.grade) {
    isProductTypeFilter(arr, pipe, type)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
