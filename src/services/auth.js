import { http } from './config'

export default {
  authenticate: login => {
    return http.post('auth/authenticate', login)
  },
}
