export type DropdownItemType = {
  key: string;
  label: string;
  image?: string;
}
export type DropdownProps = {
  triggerComponent?: any;
  options: DropdownItemType[];
  selected?: DropdownItemType;
  onSelect?: any;
}

export type DropdownItemProps = {
  itemKey: string;
  label: string;
  image?: string;
}
