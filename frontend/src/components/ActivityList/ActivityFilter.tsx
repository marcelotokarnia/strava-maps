import React, { useState } from 'react'
import cogIcon from '../../assets/icons/cog.png'
import ReactModal from 'react-modal'

export default () => {
  const [isOpen, setIsOpen] = useState(false)
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
              <input type="checkbox" />
              &nbsp; 🏃🏼‍♀️
            </p>
            <p>
              <input type="checkbox" />
              &nbsp; 🚴🏻‍♀️
            </p>
            <p>
              <input type="checkbox" />
              &nbsp; 🏋🏼‍♂️
            </p>
          </span>
        </p>
        <button className="br3 bg-light-gray pointer" onClick={() => setIsOpen(false)}>
          Done
        </button>
      </ReactModal>
    </>
  )
}
