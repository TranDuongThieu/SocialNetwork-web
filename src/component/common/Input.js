import React, { useState } from "react";
import { HidePasswordIcon, ShowPasswordIcon } from "../../utils/icons";

const Input = ({ label, placeHolder, value, setValue, pass }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>
      <div className="border-[1px] px-2 py-1 flex gap-1 rounded-xl items-center justify-between">
        <input
          value={value}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}
          type={pass && (!showPassword ? "password" : "text")}
          className=" outline-none px-1 py-2 flex-1"
        />
        {pass &&
          (!showPassword ? (
            <ShowPasswordIcon
              className="cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <HidePasswordIcon
              className="cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ))}
      </div>
    </div>
  );
};

export default Input;
