import { ReactNode } from "react";
import Error from "./error";

interface IFormLabel {
  children: ReactNode,
  text?: string,
  required?: boolean
}

export default function Label({ children, text, required = true }: IFormLabel ) {
  return (
    <label
      className="block mb-2"
    >
      {text &&
        <span
          className="inline-block mb-1 font-medium text-gray-900"
        >
          {required && <span className="text-red-500 pr-1 text-sm">*</span>}
          {text}
        </span>
      }

      {children}
    </label>
  )
}

Label.Error = Error
