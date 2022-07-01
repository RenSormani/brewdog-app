import React from "react"
import Card from "../Card/Card";
import AllBeers from './AllBeers'
import { shallow } from 'enzyme';
import beers from '../../Data';

describe("AllBeers tests", () => {
    let component;

    beforeEach(() => {
        component =shallow(<AllBeers testBeer={beers}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })

    // it ("should render the correct number of Card components", () => {
    //     const numberOfBeers = beers.length;
    //     const numberOfRenderedCards = component.find(Card).length;

    //     expect(numberOfBeers).toEqual(numberOfRenderedCards);
    // })

    // it("should render the correct tagline based on the beer passed in as props", () => {
    //     const beerTag = testBeer.tagline;
    //     expect(component.text()).toContain(beerTag);
    // })

    // it("should render the correct image", () => {
    //     const beerImage = testBeer.image_url;
    //     expect(component.find("img").prop("src")).toBe(beerImage);
    // });
})

