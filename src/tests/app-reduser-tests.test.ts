import {appReduser, initializedAC} from "../redux/app-reduser";


test('correct  initialized should be sed', ()=> {
    const  startState = {
        initialized: false
    }
    const endState = appReduser(startState, initializedAC())

    expect(endState.initialized).toBe(true)
    expect(startState.initialized).toStrictEqual(!endState.initialized)
})