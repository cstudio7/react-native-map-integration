import React from "react";
import renderer from "react-test-renderer";
import MapViewContainer from "../src/components/MapViewContainer";

describe("Render MapViewContainer component", () => {
    const wrapper = renderer.create(<MapViewContainer />);
    it("should render component", () => {
        const wrapperInstance = wrapper.toJSON();
        expect(wrapperInstance).toMatchSnapshot();
    });
});
