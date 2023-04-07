import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../..'

interface UserData {
  name: string
}

export interface UserState {
  value: UserData | null
  status: 'idle' | 'loading' | 'failed'
  isLoggedIn: boolean
}

const initialState: UserState = {
  value: null,
  status: 'idle',
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.isLoggedIn = true
      state.value = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.value = null
    },
  },
})

export const { setUser, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user
export const selectUserData = (state: RootState) => state?.user.value

export default userSlice.reducer
