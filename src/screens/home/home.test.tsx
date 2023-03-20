import React from "react";
import {render, screen} from "@testing-library/react-native";
import Home from "./index";
import Note from "./Note";
import TimeLine from "./TimeLine";
import {DropdownItemType} from "../../components/dropdown/type";

const FROM_CURRENCY: DropdownItemType = {key: "AED", label: "AED", image: "ae.png"};
const TO_CURRENCY: DropdownItemType = {key: "USD", label: "USD", image: "ae.png"};

describe("<Note />", () => {
  it("render note component", async () => {
    render(<Note/>);
    expect(screen.getByText("Processing time - 1 Hour")).toBeDefined();
  });
});

describe("<TimeLine />", () => {
  it("render timeline component and see from currency to currency and exchange rate values.", async () => {
    render(<TimeLine fromCurrency={FROM_CURRENCY.key} toCurrency={TO_CURRENCY.key} exchangeRate="1.5"/>);
    expect(screen.queryByText("1 AED = USD 1.5")).toBeDefined();
  });
});

describe("<Home />", () => {
  it("render home and show transfer button", async () => {
    render(<Home/>);
    expect(screen.getByText("Start transfer")).toBeDefined();
  });

});
