import Html from './Html.js'


describe("Html", () => {
    describe("constructor", () => {
        describe("Should return a new instance if none exists", () => {
            test("Should be an object", () => {
                expect(typeof Html('div')).toBe('object')
            })
        })
    })
})