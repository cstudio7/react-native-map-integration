import React from "react";
import renderer from "react-test-renderer";
import Main from "../src/Main.js";

global.navigator = {
      geolocation: {
        clearWatch: jest.fn(),
        getCurrentPosition: jest.fn(),
        stopObserving: jest.fn(),
        watchPosition: jest.fn()
      }
};

describe("Render App component", () => {
    const wrapper = renderer.create(<Main />);
    it("should render component", () => {
        const wrapperInstance = wrapper.toJSON();
        expect(wrapperInstance).toMatchSnapshot();
    });

    it("should call function: _fetchCurrentPosition", () => {
        const wrapperInstance = wrapper.getInstance();
        wrapperInstance._fetchCurrentPosition();
    })
});
