import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
} from './mutation-types'

import {
  reqAddress,
  reqShops,
  reqFoodCategorys,
  reqUser,
  reqLogout,
  reqInfo,
  reqRatings,
  reqGoods
} from '../api';

export default {
   async getShops ({commit, state}){
    const {longitude, latitude} = state
    const result = await reqShops (longitude, latitude)
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  async getCategorys ({commit}) {
     const result = await reqFoodCategorys()
     if(result.code===0){
       const categorys = result.data
       commit (RECEIVE_CATEGORYS, {categorys})
     }
  },
  async getAddress ({commit, state}){
     const {longitude, latitude} = state
     const result = await reqAddress(longitude, latitude)
     if(result.code===0) {
       const address = result.data
       commit (RECEIVE_ADDRESS, {address})
     }
  },
  saveUser({commit}, user){
     commit(RECEIVE_USER, {user})
  },

  async getUser ({commit}){
     const result = await reqUser()
    if (result.code===0){
       const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },
  async logout ({commit}){
     const result = await reqLogout()
    if (result.code===0) {
       commit(RESET_USER)
    }
  },
  async getShopInfo({commit}) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },
  async getShopRatings({commit}) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  async getShopGoods({commit}) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
}
