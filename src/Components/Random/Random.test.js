import React from "react"
import Random from './Random'
import { shallow } from 'enzyme';

describe("Random tests", () => {
    let component;

    beforeEach(() => {
        component =shallow(<Random />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})