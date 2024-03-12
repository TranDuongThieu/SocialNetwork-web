import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
// import { setUserAction } from "../store/actions/userAction";
const SignUp = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const dispatch = useDispatch();
    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = passwordConfirmRef.current.value;
        const lastname = lastNameRef.current.value;
        const firstname = firstNameRef.current.value;
        if (password !== confirmPassword) {
            alert("ConfirmPassword is incorrect");
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    user.displayName = firstname + " " + lastname;
                    alert("Success");
                    console.log(user);
                    // dispatch(setUserAction(user));
                    // addDocument("users", {
                    //     displayName: firstname + " " + lastname,
                    //     photoURL: user.photoURL,
                    //     uid: user.uid,
                    //     email: user.email,
                    //     providerId: user.providerId,
                    // });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode, errorMessage);
                });
        }
    };
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
            <span className="font-bold text-[25px]">SIGN UP</span>
            <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2">
                        <label>First Name</label>
                        <input
                            ref={firstNameRef}
                            type="text"
                            placeholder="Type your first name"
                            className="outline-none border-b-[1px] border-b-slate-500 rounded-md px-3 py-2 min-w-[100px]"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Last Name</label>
                        <input
                            ref={lastNameRef}
                            type="text"
                            placeholder="Type your last name"
                            className="outline-none border-b-[1px] border-b-slate-500 rounded-md px-3 py-2 min-w-[100px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                    ref={emailRef}
                    type="text"
                    placeholder="Type your email"
                    className="outline-none border-b-[1px] border-b-slate-500 rounded-md px-3 py-2 min-w-[300px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Type your password"
                    className="outline-none border-b-[1px] border-b-slate-500 rounded-md px-3 py-1 min-w-[300px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label>Confirm Password</label>
                <input
                    ref={passwordConfirmRef}
                    type="password"
                    placeholder="Type your confirm password"
                    className="outline-none border-b-[1px] border-b-slate-500 rounded-md px-3 py-1 min-w-[300px]"
                />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <button className="px-[70px] py-2 border-slate-600 cursor-pointer border-[1px] hover:bg-slate-600 hover:text-white duration-500 rounded-md">
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default SignUp;
