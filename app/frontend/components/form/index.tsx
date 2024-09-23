import { ReactNode } from "react";
import TextInput from "./text-input";
import Label from "./label";
import TextArea from "./text-area";
import cn from "@/utils/cn";
import Button from "./button";
import DateInput from "./date-input";

interface IForm {
  children: ReactNode,
  className?: string,
  [key: string]: any
}

export default function Form({ children, className = '', ...rest }: IForm) {
  return (
    <form
      className={cn(className)}
      {...rest}
    >
      { children }
    </form>
  )
}

Form.TextInput = TextInput
Form.Label = Label
Form.TextArea = TextArea
Form.Button = Button
Form.DateInput = DateInput
