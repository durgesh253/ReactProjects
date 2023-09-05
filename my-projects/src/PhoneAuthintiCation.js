import React, { useState } from 'react';
import OTPInput from 'otp-input-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {auth} from './firbase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function PhoneAuthentication() {
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const [showOtp, setShowOtp] = useState(false); // Changed to false initially
  const [user, setUser] = useState(null);
  
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  return (
    <section className="text-white justify-content-center align-items-center mt-5 p-5">
      <h3>Phone Authentication</h3>
      {user ? (
        <h2 className="text-center mt-5">Login success....</h2>
      ) : (
        <div>
          <h1 className=" text-3xl mb-6">
            Welcome to <br /> CODE A PROGRAM
          </h1>
          {showOtp ? (
            <div className="mt-2">
              <label htmlFor="" className="">
                Enter Your OTP:
              </label>
              <OTPInput
                className="mt-2"
                value={otp}
                onChange={setOtp}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
              <button className="btn btn-success mt-4">
                Verify OTP
              </button>
            </div>
          ) : (
            <div className="mt-2">
              <label htmlFor="" className="">
                Verify Your Phone Number
              </label>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                className="w-25 text-black"
              />
              <button className="btn btn-success mt-4" >
                Send Code via SMS
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default PhoneAuthentication;

