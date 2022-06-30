import React from "react"
import CardButton from './CardButton'
import { shallow } from 'enzyme';

describe("CardButton tests", () => {
    let component;

    beforeEach(() => {
        component =shallow(<CardButton />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})