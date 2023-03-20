import React, {useState} from "react";
import {fireEvent, render} from "@testing-library/react-native";
import Input from "./index";


const onPressMock = jest.fn();
function InputTest() {
  const [value, setValue] = useState('')
  return <Input value={value} onChangeText={setValue} testID="input" />
}


describe("<Input />", () => {
  test('should apply the value when changing text', () => {
    const { getByTestId } = render(<InputTest />);
    const input = getByTestId('input');
    fireEvent.changeText(input, '123');
    expect(input.props.value).toBe('123');
  });

});
