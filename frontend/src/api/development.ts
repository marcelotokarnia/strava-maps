import { API as APIType, MappersmithResponse } from 'interfaces/api'
import getActivityDetails from 'fixtures/getActivityDetails'
import getStravaActivities from 'fixtures/getStravaActivities'
import getStravaClubActivities from 'fixtures/getStravaClubActivities'
import getStravaProfile from 'fixtures/getStravaProfile'
import mapColabFixture from 'fixtures/mapColabFixture'

const mappersmithResponse = (body): MappersmithResponse => ({
  data: () => body,
  status: () => 200,
})

const API: APIType = {
  meta: {
    tags: async () =>
      mappersmithResponse({
        title: `mtokarnia's latest strava map`,
        description: `Check out mtokarnia's latest strava activities on this nice interactive big map`,
        image: `https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1592743390/screenshots/2020-06-21-582a17df-0c17-476e-844e-bd9a5163f05b.png`,
      }),
  },
  strava: {
    auth: async () => mappersmithResponse({}),
  },
  map: {
    save: async () => mappersmithResponse({ uuid: '8231a895-2e44-431e-9e64-dddaf505cfd0' }),
    getColabRoute: async () => mappersmithResponse(mapColabFixture),
  },
  graphql: {
    getData: async ({ body: { variables: { id } = { id: '' } } }) =>
      mappersmithResponse({
        data: {
          getStravaActivityDetails: getActivityDetails(id),
          getStravaActivities,
          getStravaProfile,
          getStravaClubActivities,
        },
      }),
  },
}

export default API
