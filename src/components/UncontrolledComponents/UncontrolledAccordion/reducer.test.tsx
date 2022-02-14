import {reducer, StateType, toggleCollapsed} from "./reducer";


test('collapsed should be true', ()=>{
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: toggleCollapsed})


    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', ()=>{
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: toggleCollapsed})

    expect(newState.collapsed).toBe(false)
})

test('fake type', ()=>{
    const state: StateType = {
        collapsed: true
    }

    expect(()=>{
        reducer(state, {type: 'fakeType'})
    }).toThrowError()
})