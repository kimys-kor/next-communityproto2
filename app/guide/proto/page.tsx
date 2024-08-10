import Ggmp from "../(components)/Ggmp";
import Image from "next/image";
import proto from "/public/images/proto.png";
import protototo from "/public/images/protototo.png";

function page() {
  return (
    <div className="w-full">
      <main>
        <Ggmp />
        <section className="flex flex-col justify-center items-center py-20">
          <Image
            alt="꽁머니팡소개"
            width={248}
            height={255}
            src={proto}
          ></Image>
          <div className="text-4xl font-semibold px-3">
            <span className="text-blue">프로토</span> 스포츠토토
          </div>
          <div className="w-full max-w-[900px] px-5 py-5">
            <p className="w-full text-center leading-6 text-sm font-medium text-description">
              스포츠토토를 즐기시는 분들 중에 프로토 스포츠 토토를 즐기시는
              분들이 많습니다.
            </p>
            <p className="w-full text-center leading-6 text-sm font-medium text-description">
              프로토 스포츠토토는 프로토 기록식과 프로토 승부식으로
              나누어집니다.
            </p>
            <p className="w-full text-center leading-6 text-sm font-medium text-description">
              프로토 승부식은 프로토 승무패라고도 부릅니다.
            </p>
          </div>

          <div className="pt-20 w-full flex flex-col items-center justify-center">
            <div className="px-5">
              <Image
                alt="프로토토토"
                width={671}
                height={186}
                src={protototo}
              ></Image>
            </div>
            <article className="block lg:flex justify-center py-20 px-5 gap-20 border-solid border-b border-slate-200">
              <div className=" flex flex-col items-center">
                <div className="w-full pt-10 px-5 py-10 flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-32 border-b border-solid border-gray-200">
                  <div className="w-72 text-3xl font-bold flex ">
                    <h1 className="">프로토</h1>
                    <h1 className="text-blue">&nbsp;기록식</h1>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        1
                      </div>
                      <div className="w-full max-w-[568px]">
                        프로토 기록식은 경기의 최종적 점수와 점수의 차이, 우승팀
                        등 해당하는 경기에서 발생하는 특정한 요인들을 예상하는
                        게임입니다.
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        2
                      </div>
                      <div className="w-full max-w-[568px]">
                        게임은 한 회차당 최대 24개의 게임으로 구성됩니다.
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-normal">
                      <div className="h-4 w-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        3
                      </div>
                      <div className="w-full max-w-[568px]">
                        축구와 야구,농구,배구가 진해오디며 축구만 연장전을
                        제외하고 나머지 게임은 연장전을 포함합니다.
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-normal">
                      <div className="h-4 w-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        4
                      </div>
                      <div className="w-full max-w-[568px]">
                        축구와 야구,농구,배구가 진행되며 축구만 연장전을
                        제외하고 나머지 게임은 연장전을 포함합니다.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full  pt-20 px-5 flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-32">
                  <div>
                    <div className="w-72 text-3xl font-bold flex">
                      <h1 className="">프로토</h1>
                      <h1 className="text-blue">&nbsp;승부식</h1>
                    </div>
                    <h1 className="text-2xl font-bold">(프로토 승무패)</h1>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        1
                      </div>
                      <div className="w-full max-w-[568px]">
                        프로토 승부식은 승무패라고도 하며 게임의 승, 무, 패를
                        예측하는 게임입니다.
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        2
                      </div>
                      <div className="w-full max-w-[568px]">
                        프로토 승부식은 2~10개 경기 또는 하나의 경기로 지정된
                        경기 중에서 1개 경기만 선택하여 예상결과를 적중시키는
                        게임입니다.
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        3
                      </div>
                      <div className="w-full max-w-[568px]">
                        최대 650개의 경기로 구성되며 2~10개의 경기를 조합하여
                        구매하거나 한 경기로 지정된 경기 중에서 1개의 경기만
                        선택하여 구매가 가능합니다.
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        4
                      </div>
                      <div className="w-full max-w-[568px]">
                        배팅 가능한 스포츠 종목으로는 축구,야구,농구,배구입니다.
                        축구는 후반 종류 시가 기준이 되어 연장전은 포함되지
                        않으며 나머지 스포츠는 연장전을 포함합니다.
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                        5
                      </div>
                      <div className="w-full max-w-[568px]">
                        적중 기준은 경기 결과를 모두 맞힌 경우에만 적중으로 보며
                        적중금은 적중 배당률과 개별투표금액을 곱해 지급됩니다.
                      </div>
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
