export async function fetchDataWithDelay() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = [
    {
      title: "웰시코기",
      img: "/images/dog1.PNG",
      date: "24.06.12",
      writer: "관리자관리자관리자",
    },
    {
      title: "푸들",
      img: "/images/dog2.PNG",
      date: "24.06.12",
      writer: "관리자",
    },
    {
      title: "말티즈",
      img: "/images/dog3.PNG",
      date: "24.06.12",
      writer: "관리자",
    },
    {
      title: "말티즈",
      img: "/images/dog4.PNG",
      date: "24.06.12",
      writer: "관리자",
    },
  ];

  return data;
}
