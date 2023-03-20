import renderer from "react-test-renderer";
import {fireEvent, render, screen} from "@testing-library/react-native";
import Button from "./index";

const onPressMock = jest.fn();
const eventData = {
  nativeEvent: {
    pageX: 20,
    pageY: 30,
  },
};
describe("<Button />", () => {
  it("has 1 child", () => {
    const tree: any = renderer.create(<Button text="Hello button"/>).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders Button and check the text", async () => {
    render(<Button text="Hello button"/>);
    expect(screen.getByText("Hello button")).toBeDefined();
  });
  it("renders Button and check onPress event", async () => {
    render(<Button text="Press me" onPress={onPressMock}/>);
    fireEvent.press(screen.getByText('Press me'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
