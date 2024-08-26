"use client";

import { useForm, Controller } from "react-hook-form";

interface FormData {
  oldpassword: string;
  password: string;
  confirmPassword: string;
}

function PasswordChange() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      oldpassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");
  const isPasswordValid =
    password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);

  const onSubmit = (data: FormData) => {
    console.log("password Change request", data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-3"
        >
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 md:px-0">
            <p className="py-3 font-semibold text-lg border-solid border-b border-[#F3F3F3]">
              비밀번호 수정
            </p>
            <div className="w-full flex flex-col gap-3 p-2">
              <p className="w-24">현재 비밀번호</p>
              <Controller
                name="oldpassword"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="password"
                      className="truncate appearance-none border rounded py-2 px-1 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
                    />
                  </>
                )}
              />
            </div>
            <div className="mt-3 flex flex-col gap-3">
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
          <div className="w-full gap-3 flex justify-center p-2">
            <button
              type="submit"
              disabled={!isValid || !isPasswordValid}
              className={`w-full md:w-1/2 lg:w-1/3 px-4 py-4 ${
                isValid && isPasswordValid
                  ? "bg-blue text-white hover:bg-deepblue"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
            >
              비밀번호 변경
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordChange;
