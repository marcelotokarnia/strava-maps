import { AuthorizeResponse } from '@tokks/strava/typings/api/auth'

const authorize: AuthorizeResponse = {
  access_token: 'a4b945687g...',
  athlete: {
    badge_type_id: 0,
    city: '',
    country: '',
    created_at: '2015-11-21T00:38:38Z',
    firstname: 'Marcelo',
    follower: null,
    friend: null,
    id: 12209995,
    lastname: 'Tokarnia',
    premium: false,
    profile: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/12209995/3792689/1/large.jpg',
    profile_medium:
      'https://dgalywyr863hv.cloudfront.net/pictures/athletes/12209995/3792689/1/medium.jpg',
    resource_state: 2,
    sex: 'M',
    state: '',
    summit: false,
    updated_at: '2019-09-16T14:46:09Z',
    username: 'mtokarnia',
  },
  expires_at: 1568775134,
  expires_in: 21600,
  refresh_token: 'e5n567567...',
  token_type: 'Bearer',
}

export default authorize
