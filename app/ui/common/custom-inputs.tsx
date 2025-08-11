import { ChangeEvent, ReactNode } from "react";
import { pl } from "zod/locales";

type BaseProps = {
  icon: ReactNode;
  label?: string;
  id?: string;
  name?: string;
  className?: string;
};

function BaseInputWrapper({
  icon,
  label,
  id,
  className,
  children,
}: BaseProps & { children: ReactNode }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-2 md:inline-block">
          {label}
        </label>
      )}
      <div className="relative">
        {children}
        <span className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      </div>
    </div>
  );
}

export function TextInput({
  icon,
  label,
  id,
  name,
  placeholder,
  defaultValue,
  className,
  onChange,
}: BaseProps & {
  placeholder: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <BaseInputWrapper icon={icon} label={label} id={id} className={className}>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-200 bg-white py-3 pl-10 outline-none focus:border-blue-400"
        defaultValue={defaultValue}
        onChange={onChange}
        required
      />
    </BaseInputWrapper>
  );
}

export function SelectInput({
  icon,
  label,
  id,
  name,
  values,
  className,
  placeholder,
}: BaseProps & {
  placeholder?: string;
  values: { value: string; label: string }[];
}) {
  return (
    <BaseInputWrapper icon={icon} label={label} id={id} className={className}>
      <select
        id={id}
        name={name}
        className="w-full cursor-pointer appearance-none rounded-md border border-gray-200 bg-white py-3 pl-10 outline-none focus:border-blue-400"
        defaultValue=""
        required
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {values.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </BaseInputWrapper>
  );
}

export function CustomRadioBtn() {
  return <div></div>;
}
