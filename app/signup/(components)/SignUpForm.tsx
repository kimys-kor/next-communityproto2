"use client";

import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import logo from "/public/images/logo.png";

interface FormData {
  id: string;
  password: string;
  confirmPassword: string;
  name: string;
  nickname: string;
  phoneNumber: string;
  email: string;
}

const SignUpForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      id: "",
      password: "",
      confirmPassword: "",
      name: "",
      nickname: "",
      phoneNumber: "",
      email: "",
    },
  });

  const password = watch("password");
  const phoneNumber = watch("phoneNumber");
  const isPhoneNumberValid = phoneNumber.length === 11;
  const isPasswordValid =
    password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);

  const onSubmit = (data: FormData) => {
    console.log("signUp request", data);
  };

  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center">
      <article className="mt-5 w-full lg:w-auto flex flex-col justify-center items-center lg:items-start lg:px-20">
        <div className="w-80 flex justify-center items-center">
          <Image alt="logo" width={260} height={100} src={logo}></Image>
        </div>
        <div className="w-80 pt-5 text-lg font-medium text-blue flex justify-center items-center">
          <p className="text-3xl">회원가입</p>
        </div>
      </article>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center gap-3"
      >
        <div className="w-full md:w-1/2 md:px-0 lg:w-1/3 px-3">
          <p className="py-3 font-semibold text-lg border-solid border-b border-[#F3F3F3]">
            이용정보 입력
          </p>
          <div className="w-full mt-3 flex flex-col gap-1">
            <div className="w-full flex flex-col gap-2 p-2">
              <p className="w-24">아이디</p>
              <p className="text-subtext2 text-sm">
                영문 입력 3~16글자, 알파벳, 숫자, _만 사용가능
              </p>
              <Controller
                name="id"
                control={control}
                rules={{
                  required: "아이디는 필수 입력 사항입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "영문과 숫자만 입력 가능합니다.",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      className="w-full truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                    />
                    {errors.id && (
                      <p className="text-warnigtext text-xs">
                        {errors.id.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-3 p-2">
              <p className="w-24">비밀번호</p>
              <p className="text-subtext2 text-sm">
                영문,숫자를 포함한 8자 이상의 비밀번호
              </p>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "비밀번호는 필수 입력 사항입니다.",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 8자 이상이어야 합니다.",
                  },
                  validate: (value) =>
                    /[A-Za-z]/.test(value) && /\d/.test(value)
                      ? true
                      : "영문과 숫자를 포함한 비밀번호를 입력하세요.",
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="password"
                      className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                    />
                    {errors.password && (
                      <p className="text-warnigtext text-xs">
                        {errors.password.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-3 p-2">
              <p className="w-24">비밀번호 확인</p>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  validate: (value) =>
                    value === password || "비밀번호가 다릅니다.",
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="password"
                      className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                    />
                    {errors.confirmPassword && (
                      <p className="text-warnigtext text-xs">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-3 md:px-0">
          <p className="py-3 font-semibold text-lg border-solid border-b border-[#F3F3F3]">
            개인정보 입력
          </p>
          <div className="mt-3 flex flex-col gap-3">
            <div className="w-full flex flex-col gap-3 p-2">
              <p className="w-24">이름</p>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                  />
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-3 p-2">
              <p className="w-24">닉네임</p>
              <Controller
                name="nickname"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                  />
                )}
              />
            </div>
            <div className="w-full flex flex-col gap-2 p-2">
              <p className="w-24">핸드폰번호</p>
              <p className="text-subtext2 text-sm">-없이 숫자만 입력</p>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: "핸드폰 번호는 필수 입력 사항입니다.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "숫자만 입력 가능합니다.",
                  },
                  minLength: {
                    value: 11,
                    message: "11자리 숫자를 입력해야 합니다.",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      maxLength={11}
                      className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                    />
                    {errors.phoneNumber && (
                      <p className="text-warnigtext text-xs">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </>
                )}
              />
              <button
                type="button"
                disabled={!isPhoneNumberValid}
                className={`border border-solid rounded-lg border-blue bg-white text-blue px-2 py-3 w-full ${isPhoneNumberValid ? "hover:bg-blue hover:text-white" : "opacity-50 cursor-not-allowed"}`}
              >
                인증번호 전송
              </button>
            </div>
            <div className="w-full flex flex-col gap-3 p-2">
              <p className="w-24">E-mail</p>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "이메일은 필수 입력 사항입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "유효한 이메일 주소를 입력하세요.",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="email"
                      className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-warnigtext text-xs">
                        {errors.email.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full gap-3 flex justify-center p-2">
          <button
            type="submit"
            disabled={!isValid || !isPhoneNumberValid || !isPasswordValid}
            className={`w-full md:w-1/2 lg:w-1/3 px-4 py-4 ${
              isValid && isPhoneNumberValid && isPasswordValid
                ? "bg-blue text-white hover:bg-deepblue"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
