import userReducer, { UserState, logout, setUser } from '@/store/features/user'

describe('user reducer', () => {
  const initialState: UserState = {
    value: {
      name: 'user test',
    },
    status: 'idle',
    isLoggedIn: false,
  }
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      value: null,
      status: 'idle',
      isLoggedIn: false,
    })
  })

  it('should log in and set user data', () => {
    const actual = userReducer(initialState, setUser({ name: 'Hello Next.js' }))
    expect(actual.value).toEqual({ name: 'Hello Next.js' })
    expect(actual.isLoggedIn).toEqual(true)
  })

  it('should logout and clear user data', () => {
    const actual = userReducer(initialState, logout())
    expect(actual.value).toEqual(null)
    expect(actual.isLoggedIn).toEqual(false)
  })
})
