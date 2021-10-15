const passport = require("./passport")
// @ponicode
describe("passport", () => {
    test("0", () => {
        let callFunction = () => {
            passport({ use: () => "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            passport({ use: () => "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            passport({ use: () => "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            passport({ use: () => "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            passport({ use: () => "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            passport(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
