import { connect, ConnectedProps } from 'react-redux'
import React, { useState } from 'react'
import { ActivitiesActions } from '../../store/actions'
import Checkbox from '../styleguide/Checkbox'
import cogIcon from '../../assets/icons/cog.png'
import ReactModal from 'react-modal'
import { RootState } from '../../interfaces/store/reducers'

const mapStateToProps = (state: RootState) => ({
  type: state.activities.filter.type,
})

const mapDispatchToProps = {
  updateFilter: ActivitiesActions.updateFilter,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(({ updateFilter, type }: PropsFromRedux) => {
  const [isOpen, setIsOpen] = useState(false)
  const [includeBike, setIncludeBike] = useState(type.bike)
  const [includeRun, setIncludeRun] = useState(type.run)
  const [includeWorkout, setIncludeWorkout] = useState(type.workout)
  const onClickDoneButton = () => {
    updateFilter({
      type: {
        run: includeRun,
        bike: includeBike,
        workout: includeWorkout,
      },
    })
    setIsOpen(false)
  }
  return (
    <>
      <button className="w3 br3 bg-light-gray pointer" onClick={() => setIsOpen(true)}>
        <img src={cogIcon} />
      </button>
      <ReactModal
        isOpen={isOpen}
        style={{
          content: { width: '300px', top: '20%', left: '40%', right: 'auto', bottom: 'auto' },
        }}
      >
        <h3>Filters</h3>
        <p className="flex">
          <span className="flex-auto">
            <p>Type:</p>{' '}
          </span>
          <span className="flex-auto">
            <p>
              <Checkbox text="🏃🏼‍♀️" checked={includeRun} onChange={setIncludeRun} />
            </p>
            <p>
              <Checkbox text="🚴🏻‍♀️" checked={includeBike} onChange={setIncludeBike} />
            </p>
            <p>
              <Checkbox text="🏋🏼‍♂️" checked={includeWorkout} onChange={setIncludeWorkout} />
            </p>
          </span>
        </p>
        <button className="br3 bg-light-gray pointer" onClick={onClickDoneButton}>
          Done
        </button>
      </ReactModal>
    </>
  )
})
