import { getPaddingClass } from "@/app/lib/utils";
import clsx from "clsx";
import { ReactNode } from "react";

interface BaseInputProps {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
}

interface InputWrapperProps extends BaseInputProps {
  children: ReactNode;
}

interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseInputProps {}

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    BaseInputProps {
  options: { label: string; value: string }[];
  placeholder?: string;
}

const baseInputClass =
  "w-full rounded-md bg-white py-3 outline outline-gray-200 focus:outline-blue-400";
const baseIconClass =
  "pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400";

function InputWrapper({
  leadingIcon,
  trailingIcon,
  className,
  children,
}: InputWrapperProps) {
  return (
    <div className={clsx("relative", className)}>
      {leadingIcon && (
        <span className={clsx(baseIconClass, "left-3")}>{leadingIcon}</span>
      )}
      {children}
      {trailingIcon && (
        <span className={clsx(baseIconClass, "right-3")}>{trailingIcon}</span>
      )}
    </div>
  );
}
export function OutlinedTextField({
  leadingIcon,
  trailingIcon,
  className,
  ...rest
}: TextFieldProps) {
  const paddingClass = getPaddingClass(leadingIcon, trailingIcon);

  return (
    <InputWrapper
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      className={className}
    >
      <input className={clsx(baseInputClass, paddingClass)} {...rest} />
    </InputWrapper>
  );
}

export function OutlinedSelectField({
  leadingIcon,
  trailingIcon,
  className,
  placeholder,
  options,
  ...rest
}: SelectFieldProps) {
  const paddingClass = getPaddingClass(leadingIcon, trailingIcon);

  return (
    <InputWrapper
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      className={className}
    >
      <select className={clsx(baseInputClass, paddingClass)} {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
}
