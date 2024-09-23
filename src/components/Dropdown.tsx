import React, { FC } from 'react';

export interface DropdownProps {
  label: string;
  options: string[];
}

const Dropdown: FC<DropdownProps> = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
