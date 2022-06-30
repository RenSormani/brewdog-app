import React from "react"
import RandomBeer from './RandomBeer'
import { shallow } from 'enzyme';

describe("RandomBeer tests", () => {
    let component;

    beforeEach(() => {
        component =shallow(<RandomBeer />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})
