import { dissoc } from 'ramda'
import renderer from 'react-test-renderer'

export default (stories: any) => {
  return describe(stories.default.title, () => {
    Object.keys(dissoc('default', stories)).forEach(name =>
      it(name, () => {
        const tree = renderer.create(stories[name]()).toJSON()
        expect(tree).toMatchSnapshot()
      })
    )
  })
}
