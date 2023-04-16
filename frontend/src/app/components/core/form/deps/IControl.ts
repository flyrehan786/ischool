
export interface IValidators {
  key: string;
  value: string;
  message: string;
}
export interface IDropdownOption {
  key: string;
  value: string;
}
export interface IControl {
  type: string;
  key: string;
  defaultValue: string;
  validators: IValidators[];
  options?: IDropdownOption[];
}
