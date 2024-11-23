import axios from 'axios'

// default dummy user
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
    bs: 'cyber quote financial it solutions',
  },
}

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    // fetch users from API
    const { data: users } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users/')

    // check if user ID matches either the dummy user or an API user
    const isValidUser
      = users.some(user => user.id.toString() === body.userID) || body.userID === DUMMY_USER.id.toString()

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

    return {
      token: `dummy-token-${user.id}`,
      user,
    }
  }
  catch (error) {
    setResponseStatus(event, 500, 'Internal Server Error')
    return {
      error: 'Failed to fetch user data',
      details: error.message,
    }
  }
})
