import React from "react"
import Home from './Home'
import { shallow } from 'enzyme';

describe("Home tests", () => {
    let component;

    beforeEach(() => {
        component =shallow(<Home />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})