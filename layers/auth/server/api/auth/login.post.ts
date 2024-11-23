import axios from 'axios'
import { defineEventHandler, readBody, setResponseStatus } from 'h3'

const DUMMY_USER = {
  id: 97,
  name: 'Bhaktiaji Ilham Mabruri',
  username: 'bhakti97',
  email: 'bhaktiaji1997@gmail.com',
  address: {
    street: 'Jl. RRI Kp. Parung Serab',
    suite: 'Kelurahan Tirtajaya, Kecamatan Sukmajaya',
    city: 'Depok',
    zipcode: '16412',
    geo: {
      lat: '-6.2088',
      lng: '106.8456',
    },
  },
  phone: '+62822-2112-2318',
  website: 'https://github.com/coDEMONkey-stack',
  company: {
    name: 'Cyber Quote',
    catchPhrase: 'Financial Training Information Technology',
    bs: 'cyberquote financial it solutions',
  },
}

interface Geo {
  lat: string
  lng: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo?: Geo
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export default defineEventHandler(async (event) => {
  const body = await readBody<{ userID: string }>(event)

  try {
    // fetch users from API
    const { data: users } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users/')

    // check if user ID matches either the dummy user or an API user
    const isValidUser
      = users.some(user => user.id.toString() === body.userID)
      || body.userID === DUMMY_USER.id.toString()

    if (!isValidUser) {
      setResponseStatus(event, 401, 'Unauthenticated')
      return {
        error: 'Unauthenticated. UserID not found',
      }
    }

    // return the appropriate user data
    const user
      = body.userID === DUMMY_USER.id.toString()
        ? DUMMY_USER
        : users.find(user => user.id.toString() === body.userID)

    if (!user) {
      setResponseStatus(event, 500, 'Internal Server Error')
      return {
        error: 'Unexpected error: user not found after validation',
      }
    }

    return {
      token: `dummy-token-${user.id}`,
      user,
    }
  }
  catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    setResponseStatus(event, 500, 'Internal Server Error')
    return {
      error: 'Failed to fetch user data',
      details: errorMessage,
    }
  }
})
