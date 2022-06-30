import React from "react"
import SearchBar from './SearchBar'
import { shallow } from 'enzyme';

describe("SearchBar tests", () => {
    let component;
    let mockFn;

    beforeEach(() => {
        mockFn = jest.fn();
        component =shallow(<SearchBar handleInput={mockFn}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })

    it("should call the parent function on input", () => {
        component.find("input").simulate("input", { target: { value: "user input"}})
        expect(mockFn).toHaveBeenCalled();
    })

    it("should call the parent function with 'user input'", () => {
        component.find("input").simulate("input", { target: { value: "user input"}})
        expect(mockFn).toHaveBeenCalledWith[("user input")];
    })
})