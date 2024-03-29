import { connect, ConnectedProps } from 'react-redux'
import { ProfilesState, RootState } from 'interfaces/store/reducers'
import ActivityEntry from './ActivityEntry'
import ActivityFilter from './ActivityFilter'
import ErrorBoundary from 'components/ErrorBoundary'
import React from 'react'
import { values } from 'ramda'

const mapStateToProps = (state: RootState) => ({
  activitiesList: state.activities.activitiesList,
  profiles: state.profiles,
})

const connector = connect(mapStateToProps)

type ActivityListProps = ConnectedProps<typeof connector> & { hideFilter?: boolean }

export const findProfile = (profiles: ProfilesState, activity) => {
  if (activity.athleteId) {
    return profiles[activity.athleteId]
  } else if (activity.athleteName) {
    return (
      values(profiles).find(({ name }) => name.startsWith(activity.athleteName.slice(0, -1))) ||
      values(profiles).find(({ shortname }: any) => shortname === activity.athleteName) || {
        createdAt: '2015-11-21T00:38:38Z',
        id: '',
        name: activity.athleteName,
        picture:
          'https://d3nn82uaxijpm6.cloudfront.net/assets/avatar/athlete/medium-bee27e393b8559be0995b6573bcfde897d6af934dac8f392a6229295290e16dd.png',
        username: '',
      }
    )
  }
}

export default connector(({ activitiesList, profiles, hideFilter }: ActivityListProps) => (
  <div className="nowrap overflow-y-auto ph1 pv2" style={{ flex: '1 1 0' }}>
    {hideFilter ? null : <ActivityFilter />}
    {activitiesList.map(activity => (
      <ErrorBoundary key={activity.id}>
        <ActivityEntry activity={activity} profile={findProfile(profiles, activity)} />
      </ErrorBoundary>
    ))}
  </div>
))
