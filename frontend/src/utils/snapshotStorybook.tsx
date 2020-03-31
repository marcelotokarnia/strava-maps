import { BrowserRouter } from 'react-router-dom'
import { dissoc } from 'ramda'
import React from 'react'
import renderer from 'react-test-renderer'

export default (stories: any) => {
  return describe(stories.default.title, () => {
    Object.keys(dissoc('default', stories)).forEach(name =>
      it(name, () => {
        const tree = renderer.create(<BrowserRouter>{stories[name]()}</BrowserRouter>).toJSON()
        expect(tree).toMatchSnapshot()
      })
    )
  })
}
