"use client";

import { useForm, Controller } from "react-hook-form";

interface FormData {
  fullname: string;
  nickname: string;
  phoneNumber: string;
  email: string;
}

function InfoChange() {
  const userInfo = {
    id: "user121",
    fullname: "김득근",
    nickname: "커뮤관리자",
    Level: 1,
    point: 104200,
    joinDate: "2024-08-25",
    phoneNumber: "01011112222",
    email: "king@naver.com",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      fullname: userInfo.fullname,
      nickname: userInfo.nickname, // 기본값을 userInfo.nickname으로 설정
      phoneNumber: userInfo.phoneNumber,
      email: userInfo.email,
    },
  });

  const phoneNumber = watch("phoneNumber");
  const isPhoneNumberValid = phoneNumber.length === 11;

  const onSubmit = (data: FormData) => {
    console.log("info Change request", data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-3"
        >
          <div className="w-full md:w-1/2 md:px-0 lg:w-1/3 px-3">
            <div className="w-full mt-3 flex flex-col gap-1">
              <div className="w-full flex flex-col gap-2 p-2">
                <p className="w-24">아이디</p>

                <input
                  defaultValue={userInfo.id}
                  disabled
                  className="w-full truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-subtext leading-tight focus:outline-none"
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
                  name="fullname"
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
              disabled={!isValid || !isPhoneNumberValid}
              className={`w-full md:w-1/2 lg:w-1/3 px-4 py-4 ${
                isValid && isPhoneNumberValid
                  ? "bg-blue text-white hover:bg-deepblue"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
            >
              회원정보수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InfoChange;
