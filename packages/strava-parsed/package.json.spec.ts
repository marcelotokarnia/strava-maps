import packageDefinition from './package.json'

describe('package.json', () => {
  it('pre release versions shall not be merged to master', async () => {
    expect(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.test(packageDefinition.version)).toBeTruthy()
  })
})
