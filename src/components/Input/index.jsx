import React from "react";
import { Wrapper } from "./style";

const Input = ({
  label,
  onChange,
  className,
  labelClassName,
  inputClassName,
  value,
  placeholder,
  type,
}) => {
  return (
    <Wrapper>
      <div className={`input-container ${className}`}>
        {label && (
          <div className={`input-label ${labelClassName}`}>{label}</div>
        )}

        <div className="inputBoxWrap">
          <input
            className={inputClassName}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Input;

export const SelectInput = ({
  options,
  placeholder,
  leftIcon,
  rightIcon,
  label,
  onChange,
  inputClassName,
  className,
  labelClassName,
  value,
  labelName,
  optionValue,
  defaultValue,
  inputWrapper,
}) => {
  return (
    <Wrapper>
      <div className={`input-container ${className}`}>
        {label && (
          <div className={`input-label ${labelClassName}`}>{label}</div>
        )}
        <div className={`inputBoxWrap ${inputWrapper}`}>
          <select
            className={inputClassName}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            defaultValue={defaultValue}
            style={{
              textTransform: "capitalize",
            }}
          >
            <option value="">{placeholder}</option>
            {options?.length
              ? options.map((option) => (
                  <option
                    key={Math.random()}
                    value={option[optionValue] || option?.id}
                  >
                    {option[labelName] || option.label || option?.name}
                  </option>
                ))
              : ""}
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

export const CheckInput = ({
  label,
  labelClassName,
  inputClassName,
  checked,
  onChange,
  className,
}) => {
  return (
    <Wrapper>
      <div className={`check-wrapper ${className}`}>
        <input
          type="checkbox"
          checked={checked}
          className={`check-input ${inputClassName}`}
          onChange={onChange}
        />
        <div className={`check-label ${labelClassName}`}>{label}</div>
      </div>
    </Wrapper>
  );
};
