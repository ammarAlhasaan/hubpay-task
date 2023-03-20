import {Text} from "react-native";
import {fireEvent, render, screen} from "@testing-library/react-native";
import Dropdown from "./index";
import {DropdownItemType} from "./type";

const onPressMock = jest.fn();

const options: DropdownItemType[] = [
  {
    key: "1",
    label: "first option",
  }
];
describe("<Dropdown />", () => {
  it("show the triggerComponent", () => {
    render(<Dropdown
      options={options}
      onSelect={onPressMock}
      triggerComponent={<Text>Dropdown</Text>}/>);

    expect(screen.getByText("Dropdown")).toBeDefined();

  });

  it("dont show dropdown list without press", () => {
    render(<Dropdown
      options={options}
      onSelect={onPressMock}
      triggerComponent={<Text>Dropdown</Text>}/>);

    expect(screen.queryByText("first option")).toBeNull();
  });

  it("clickable dropdown label", () => {
    render(<Dropdown
      options={options}
      onSelect={onPressMock}
      triggerComponent={<Text>open dropdown</Text>}/>);

    fireEvent.press(screen.getByText('open dropdown'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("open dropdown and show the dropdown list", () => {
    render(<Dropdown
      options={options}
      onSelect={onPressMock}
      triggerComponent={<Text>open dropdown</Text>}/>);

    fireEvent.press(screen.getByText('open dropdown'));
    expect(screen.queryByText("first option")).toBeDefined();
  });

  it("clickable dropdown item", () => {
    render(<Dropdown
      options={options}
      onSelect={onPressMock}
      triggerComponent={<Text>open dropdown</Text>}/>);

    fireEvent.press(screen.getByText('open dropdown'));
    fireEvent.press(screen.getByText('first option'));
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });

});
