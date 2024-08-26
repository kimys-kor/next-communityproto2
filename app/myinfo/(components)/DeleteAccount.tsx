"use client";

import { useForm, Controller } from "react-hook-form";

interface FormData {
  password: string;
}

function DeleteAccount() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const password = watch("password");
  const isPasswordFilled = password.trim() !== "";

  const onSubmit = (data: FormData) => {
    console.log("delete account request", data);
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
              회원 탈퇴
            </p>
            <div className="w-full flex flex-col gap-3 p-2">
              <p className="w-24">현재 비밀번호</p>
              <Controller
                name="password"
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
          </div>
          <div className="w-full gap-3 flex justify-center p-2">
            <button
              type="submit"
              disabled={!isPasswordFilled}
              className={`w-full md:w-1/2 lg:w-1/3 px-4 py-4 ${
                isPasswordFilled
                  ? "bg-blue text-white hover:bg-deepblue"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
            >
              회원 탈퇴
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteAccount;
