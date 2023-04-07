import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/store/features/user'

describe('store', () => {
  it('should be created with user reducer', () => {
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
    })

    expect(store.getState()).toEqual({
      user: {
        value: null,
        status: 'idle',
        isLoggedIn: false,
      },
    }) // initial state should be undefined
  })
})
