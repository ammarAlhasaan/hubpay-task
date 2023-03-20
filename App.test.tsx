import renderer from "react-test-renderer";
import {render, screen} from "@testing-library/react-native";
import App from "./App";


describe("<App />", () => {
  it("has 1 child", () => {
    const tree: any = renderer.create(<App/>).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders Start transfer Button on the home page", async () => {
    render(<App/>);
    expect(screen.getByText("Start transfer")).toBeDefined();
  });
});
