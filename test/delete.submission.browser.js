const f = fixture('Navigate')

const wait = minutes => new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      console.log("Finished waiting")
      resolve()
    },
      minutes * 60 * 1000
    )
  }
)

f
  .before(async () => await wait(5))
  .beforeEach(async () => await wait(2))
  .afterEach(async () => await Promise.resolve())

test('Navigate to Google', async t => {
  await t.navigateTo("http://www.google.co.uk")
})
