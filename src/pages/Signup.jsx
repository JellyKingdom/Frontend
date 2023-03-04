import React from "react";
import styled from "styled-components";
import { naverColorCode } from "../constants/colorCode";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const postSignup = (data) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/members/signup`, data)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit((data) => postSignup(data))}>
        <LogoStyle>NAVER</LogoStyle>
        <div>
          <input
            type="text"
            placeholder="아이디"
            {...register("userId", { required: "아이디를 입력해주세요" })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            {...register("userPassword", {
              required: "비밀번호를 입력해주세요",
            })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="닉네임"
            {...register("userNickname", {
              required: "닉네임을 입력해주세요",
            })}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <LoadingSpinner />
    </div>
  );
};

export default Signup;

const LogoStyle = styled.div`
  color: ${naverColorCode};
  font-size: 30px;
  font-weight: 900;
`;
