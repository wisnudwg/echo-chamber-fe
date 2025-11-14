"use client"

import { Ref, forwardRef, useState } from "react";
import { Input, InputProps } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";

type Props = Omit<InputProps, 'type'>

function Component(props: Props, ref?: Ref<HTMLInputElement>) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input ref={ref} type={show ? "text" : "password"} {...props} />
      <button
        className="w-fit h-full absolute top-0 right-2 flex items-center justify-center"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? <Eye /> : <EyeOff />}
      </button>
    </div>
  )
}

export const PasswordInput = forwardRef<HTMLInputElement, Props>(Component);