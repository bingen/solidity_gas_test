const getContract = artifacts.require

contract('Gas Test', accounts => {
  it('uses Base', async () => {
    const base = await getContract('Base').new()
    await base.doNothing()
  })

  it('uses Inherit', async () => {
    const inherit = await getContract('Inherit').new()
    await inherit.doNothing()
  })

  it('uses Inherit 2', async () => {
    const inherit = await getContract('Inherit').new()
    await inherit.doNothingElse()
  })

  it('uses Wrapper', async () => {
    const wrapper = await getContract('Wrapper').new()
    await wrapper.doNothing()
  })

  it('uses Caller Base', async () => {
    const caller = await getContract('Caller').new()
    await caller.createBase()
  })

  it('uses Caller Inherit', async () => {
    const caller = await getContract('Caller').new()
    await caller.createInherit()
  })

  it('uses Caller Wrapper', async () => {
    const caller = await getContract('Caller').new()
    await caller.createWrapper()
  })
})
