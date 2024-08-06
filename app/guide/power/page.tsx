import Mttp from "../(components)/Mttp";
import Image from "next/image";
import powerball from "/public/images/powerball.png";
import game from "/public/images/game.png";
import gameBlue from "/public/images/gameBlue.png";

function page() {
  return (
    <div className="w-full">
      <main>
        <Mttp></Mttp>
        <section className="flex flex-col justify-center items-center py-20">
          <Image
            alt="먹튀타파소개"
            width={332}
            height={271}
            src={powerball}
          ></Image>
          <div className="text-4xl font-semibold px-3">
            <span className="text-blue">파워볼</span>
          </div>
          <div className="w-full max-w-[900px] px-5 pt-5">
            <p className="w-full text-center break-keep leading-6 text-sm font-medium text-description">
              파워볼 게임을 즐기는 분들이 많아지고 있습니다.
            </p>
            <p className="w-full text-center break-keep leading-6 text-sm font-medium text-description">
              네임드 파워볼은 5분에 한 번24시간 진행되는 게임으로 누구나 손쉽게
              즐길 수 있다는 장점이 있습니다. 파워볼에서 어떤 숫자가 나올지를
              예측해 베팅
            </p>
            <p className="w-full text-center break-keep leading-6 text-sm font-medium text-description">
              하면 되는데요. 남녀노소를 가리지 않고 손쉽게 게임에 임할 수 있다는
              점에서 많은 사랑을 받고 있는 게임 유형입니다.
            </p>
          </div>

          <div className="pt-5 w-full flex flex-col items-center justify-center">
            <article className="block lg:flex justify-center py-20 px-5 gap-20">
              <div className=" flex flex-col items-center">
                <div className="w-full pt-10 px-5 py-10 flex flex-col gap-10 lg:gap-32">
                  <div>
                    <div className="w-72 text-3xl font-bold flex ">
                      <h1 className="">파워볼 게임</h1>
                      <h1 className="text-blue">&nbsp;종류</h1>
                    </div>
                    <div className="py-6 w-full break-keep leading-4 text-sm">
                      <p className="font-medium text-description">
                        파워볼 게임은 여러 종류가 있습니다. 다양하게 파워볼
                        게임을 즐길 수 있는데요.
                      </p>
                      <p className="font-semibold text-[#777777]">
                        일반볼과 파워볼 두 가지 게임으로 구분됩니다.
                      </p>
                    </div>
                    <div className="flex flex-col gap-10">
                      <article className="w-full px-4 py-2 bg-[#F4F4F4] rounded-md">
                        <section className="py-5 flex gap-5 items-center border-b border-solid border-[#D0D0D0]">
                          <div className="rounded-full w-36 py-2 text-center text-[#555555] bg-white text-lg font-semibold">
                            일반볼
                          </div>
                          <p className="font-semibold">
                            일반볼은 홀짝 게임, 언더오버 게임, 대중소 게임으로
                            구분됩니다.
                          </p>
                        </section>
                        <section className="py-4">
                          <div className="flex items-center gap-5 px-3">
                            <div className="flex items-center gap-2">
                              <Image
                                alt="game"
                                width={24}
                                height={24}
                                src={game}
                              ></Image>
                              <h4 className="w-16 font-bold text-[#555555]">
                                홀짝 게임
                              </h4>
                            </div>
                            <p className="text-[#555555] font-semibold">
                              1~28까지 적힌 일반볼 5개를 추첨해 숫자의 합이
                              홀수인지 짝수인지를 맞춤
                            </p>
                          </div>
                        </section>
                        <section className="py-4">
                          <div className="flex items-center gap-5 px-3">
                            <div className="flex items-center gap-2">
                              <Image
                                alt="game"
                                width={24}
                                height={24}
                                src={game}
                              ></Image>
                              <h4 className="w-16 font-bold text-[#555555]">
                                언더오버
                              </h4>
                            </div>
                            <p className="text-[#555555] font-semibold">
                              일반볼 5개를 추첨하여 숫자의 합이 72.5를 기준으로
                              높은지 낮은지를 맞춤
                            </p>
                          </div>
                        </section>
                        <section className="py-4">
                          <div className="flex items-center gap-5 px-3">
                            <div className="flex items-center gap-2">
                              <Image
                                alt="game"
                                width={24}
                                height={24}
                                src={game}
                              ></Image>
                              <h4 className="w-16 font-bold text-[#555555]">
                                대중소
                              </h4>
                            </div>
                            <p className="text-[#555555] font-semibold">
                              일반볼 5개의 숫자 합이 15~64일 때 소, 65~80일 대
                              중, 130 이상이면 대임을 맞춤
                            </p>
                          </div>
                        </section>
                      </article>
                      <article className="w-full px-4 py-2 bg-[#EEF2FF] rounded-md">
                        <section className="py-5 flex gap-5 items-center border-b border-solid border-[#D0D0D0]">
                          <div className="rounded-full w-36 py-2 text-center text-[#5171E2] bg-white text-lg font-semibold">
                            파워볼
                          </div>
                          <p className="font-semibold text-[#526DCD]">
                            파워볼은 홀짝과 언더오버 게임으로 구분됩니다.
                          </p>
                        </section>
                        <section className="py-4">
                          <div className="flex items-center gap-5 px-3">
                            <div className="flex items-center gap-2">
                              <Image
                                alt="game"
                                width={24}
                                height={24}
                                src={gameBlue}
                              ></Image>
                              <h4 className="w-16 font-bold text-[#526DCD]">
                                홀짝 게임
                              </h4>
                            </div>
                            <p className="text-[#526DCD] font-semibold">
                              0~9까지 적힌 파워볼 1개를 추첨해 홀수인지
                              짝수인지를 맞춤
                            </p>
                          </div>
                        </section>
                        <section className="py-4">
                          <div className="flex items-center gap-5 px-3">
                            <div className="flex items-center gap-2">
                              <Image
                                alt="game"
                                width={24}
                                height={24}
                                src={gameBlue}
                              ></Image>
                              <h4 className="w-16 font-bold text-[#526DCD]">
                                언더오버
                              </h4>
                            </div>
                            <p className="text-[#526DCD] font-semibold">
                              파워볼 1개 추첨 4.5를 기준으로 높은지 낮은지를
                              맞춤
                            </p>
                          </div>
                        </section>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
