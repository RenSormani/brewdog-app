import React from "react"
import Dashboard from './Dashboard'
import { shallow } from 'enzyme';

describe("Dashboard tests", () => {
    let component;

    beforeEach(() => {
        component =shallow(<Dashboard />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})