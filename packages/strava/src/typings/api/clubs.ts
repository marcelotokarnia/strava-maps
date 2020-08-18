import { DetailedClub, SummaryActivity, SummaryAthlete, SummaryClub } from '..'
import { Method, Resource } from '.'
import { Parameters as MappersmithParameters } from 'mappersmith'

export interface Clubs extends Resource {
  Clubs: {
    getClubActivitiesById: Method<GetClubActivitiesByIdParams, Array<SummaryActivity>>
    getClubAdminsById: Method<GetClubAdminsByIdParams, Array<SummaryAthlete>>
    getClubById: Method<GetClubByIdParams, DetailedClub>
    getClubMembersById: Method<GetClubMembersByIdParams, Array<SummaryAthlete>>
    getLoggedInAthleteClubs: Method<GetLoggedInAthleteClubsParams, Array<SummaryClub>>
  }
}

export interface GetLoggedInAthleteClubsParams extends MappersmithParameters {
  page?: number
  per_page?: number
}

export interface GetClubMembersByIdParams extends MappersmithParameters {
  id: number
  page?: number
  per_page?: number
}

export interface GetClubByIdParams extends MappersmithParameters {
  id: number
}

export interface GetClubActivitiesByIdParams extends MappersmithParameters {
  id: number
  page?: number
  per_page?: number
}

export interface GetClubAdminsByIdParams extends MappersmithParameters {
  id: number
  page?: number
  per_page?: number
}
