import React, { useState } from "react";
import Box from "../components/box";
import Text from "../components/text";
import IconGoogle from "../icons/google";
import IconApple from "../icons/apple";
import Input from "../components/input";

import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const navigate = useNavigate();

  const goToDashBoard = () => {
    navigate("/dashboard");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box className="flex">
      <Box className="bg-[#000000] h-screen w-2/5 flex items-center justify-center">
        <Text className=" flex  text-[#FFFFFF] text-[72px] font-[700]">
          Borad.
        </Text>
      </Box>
      <Box className="bg-[#F5F5F5] h-screen w-3/5 flex items-center justify-center">
        <Box className="block">
          <Box className="px-[6px]">
            <Text className="text-[#000000] font-[700] text-[36px]">
              Sign In
            </Text>
          </Box>
          <Box className="p-[6px]">
            <Text className="text-[#000000] font-[400] text-[16px]">
              Sign in to your account
            </Text>
          </Box>
          <Box className="flex gap-5 p-[6px]">
            <button
              className="flex gap-2 rounded-md w-[190px] h-[35px] bg-[#FFFFFF] p-[5px] px-[10px]"
              onClick={() => goToDashBoard()}
            >
              <IconGoogle height={25} width={15} />
              <Text className="text-[#858585]">Sign in with Google</Text>
            </button>
            <button
              className="flex gap-2 rounded-md w-[190px] h-[35px] bg-[#FFFFFF] p-[5px] px-[10px]"
              onClick={() => goToDashBoard()}
            >
              <IconApple height={25} width={15} />
              <Text className="text-[#858585]">Sign in with Apple</Text>
            </button>
          </Box>

          <Box className="block p-[5px] h-[360px]">
            <Box className="bg-[#FFFFFF] w-[400px] h-[300px] p-[30px] rounded-xl">
              <Input
                placeholder="Enter Your Email Address"
                label="Email address"
                value={email}
                onChange={handleEmailChange}
                type="email"
              />
              <Input
                placeholder="Enter Your Email Password"
                label="Password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
              />

              <button
                className="text-[#346BD4]"
                onClick={() => goToDashBoard()}
              >
                Forgot password?
              </button>
              <button
                className="text-[#FFFFFF] w-[330px] h-[40px] bg-[#000000] mt-[20px] rounded-lg"
                onClick={() => goToDashBoard()}
              >
                Sign In
              </button>
            </Box>
            <Box className="flex gap-1 justify-center items-center mt-[10px]">
              <Text className="">Don’t have an account?</Text>
              <button
                className="text-[#346BD4]"
                onClick={() => goToDashBoard()}
              >
                Register here
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
