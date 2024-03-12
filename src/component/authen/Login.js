import React, { useState } from "react";
import {
  FbIcon,
  GoogleIcon,
  HidePasswordIcon,
  ShowPasswordIcon,
} from "../../utils/icons";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  db,
  google_provider,
  provider,
} from "../../firebase/firebaseConfig";

import { useDispatch, useSelector } from "react-redux";
// import { addDocument } from "../Firebase/service";
import { collection, getDocs, query, where } from "firebase/firestore";
import Input from "../common/Input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = {};
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  // const isExistedUser = async (user) => {
  //     const q = query(
  //         collection(db, "users"),
  //         where("email", "==", user.email)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     return querySnapshot.docs.length > 0;
  // };
  // const handleLogin = async (type_provider) => {
  //     try {
  //         const data = await signInWithPopup(auth, type_provider);
  //         // dispatch(setUserAction(data.user));
  //         if (isExistedUser(data.user))
  //             console.log(123);
  //     } catch (error) {
  //         alert(error);
  //     }
  // };

  //   const handleEmailLogin = async (e) => {
  //     e.preventDefault();
  //     const email = e.target[0].value;
  //     const password = e.target[1].value;
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         // const user = userCredential.user;
  //         // dispatch(setUserAction(user));
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         alert(errorCode, errorMessage);
  //       });
  //   };
  //   const handeToggleShowPassword = () => {
  //     setShowPassword(!showPassword);
  //   };
  return (
    <div className="flex flex-col gap-4 min-w-[500px]">
      <span className="font-bold text-[25px]">LOGIN</span>
      <div className="flex flex-col gap-2">
        <Input
          label="Email"
          value={email}
          setValue={setEmail}
          placeHolder="Enter your email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Input
          label="Password"
          value={password}
          setValue={setPassword}
          pass
          placeHolder="Enter your password"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <button className="px-[70px] py-2 border-slate-600 cursor-pointer border-[1px] hover:bg-slate-600 hover:text-white duration-500 rounded-md">
          Login
        </button>
        <button>Login with</button>
        <div className="flex gap-5">
          <FbIcon size={35} className="text-blue-600 cursor-pointer" />
          <GoogleIcon size={35} className="text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Login;
