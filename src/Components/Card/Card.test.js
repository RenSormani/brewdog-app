import {render, screen} from "@testing-library/react";
import Card from "./Card";

const testCard = {name:"Buzz", image_url:"https://images.punkapi.com/v2/keg.png", tagline:"A Real Bitter Experience"};

beforeEach(() => {
    render(<Card beer={testCard}/>);
})

describe("should render all elements", () => {

    it("should render image", () => {
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    })
    
    it("should render button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

})



// import React from "react"
// import Card from './Card'
// import { shallow } from 'enzyme';
// import beers from "../../Data";

// describe("Card tests", () => {
//     let component;
//     let testBeer;

//     beforeEach(() => {
//         testBeer = beers[0];
//         component =shallow(<Card beer={testBeer}/>);
//     })

//     it("should render", () => {
//         expect(component).toBeTruthy();
//     })



//     it("should not have viewMore class by default", () => {
//     const element = component.find(".viewMore");
//     expect(element.hasClass("view-more")).toBe(true)
// })
    // it("should render the correct tagline based on the beer passed in as props", () => {
    //     const beerTag = testBeer.tagline;
    //     expect(component.text()).toContain(beerTag);
    // })

    // it("should render the correct image", () => {
    //     const beerImage = testBeer.image_url;
    //     expect(component.find("img").prop("src")).toBe(beerImage);
    // });