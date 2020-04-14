import { connect, ConnectedProps } from 'react-redux'
import React from 'react'
import { useParams } from 'react-router-dom'

const connector = connect()

type ActivityProps = ConnectedProps<typeof connector>

const Activity = (props: ActivityProps) => {
  const { id } = useParams()
  return <h3>ID: {id}</h3>
}

export default connector(Activity)
