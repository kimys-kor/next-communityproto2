import Image from "next/image";
import Mttp from "./(components)/Ggmp";
import question from "/public/images/question.png";
import talkball from "/public/images/talkball.png";
import advantage from "/public/images/advantage.png";
import logo from "/public/images/logo.png";

function page() {
  return (
    <div className="w-full">
      <main>
        <Mttp></Mttp>
        <section className="flex flex-col justify-center items-center py-20">
          <Image
            alt="꽁머니팡소개"
            width={248}
            height={255}
            src={question}
          ></Image>
          <div className="text-4xl font-semibold">
            왜<span className="text-blue"> 꽁머니팡</span>을 믿을수 있죠?
          </div>
          <div className="flex flex-col items-center px-3">
            <div className="w-full flex flex-col lg:flex-row pt-10 gap-5">
              <article
                className="w-full sm:w-[450px] md:w-[480px] 
              border border-solid border-deepsky rounded-md py-5 px-5 sm:px-10 flex justify-start items-center gap-3"
              >
                <span className="rounded-full bg-slate-100 px-3 py-1 text-deepblue text-xl font-bold">
                  1
                </span>
                <div className="text-lg font-medium">
                  <div>
                    <span className="text-deepblue">
                      다년 간의 토토사이트 이용경험 및 먹튀검증
                    </span>
                  </div>
                  <div>
                    <span className="text-deepblue">경험</span>을 가지고
                    있습니다.
                  </div>
                </div>
              </article>
              <article
                className="w-full sm:w-[450px] md:w-[480px] 
              border border-solid border-deepsky rounded-md py-5 px-5 sm:px-10 flex justify-start items-center gap-3"
              >
                <span className="rounded-full bg-slate-100 px-3 py-1 text-deepblue text-xl font-bold">
                  2
                </span>
                <div className="text-lg font-medium">
                  <div>
                    믿을만한 업체로부터
                    <span className="text-deepblue"> 보증금을 받고 추천</span>
                  </div>
                  <div>해 드리므로 이중으로 먹튀 예방이 가능합니다</div>
                </div>
              </article>
            </div>
            <div className="w-full flex flex-col lg:flex-row pt-5 gap-5">
              <article
                className="w-full sm:w-[450px] md:w-[480px] 
              border border-solid border-deepsky rounded-md py-5 px-5 sm:px-10 flex justify-start items-center gap-3"
              >
                <span className="rounded-full bg-slate-100 px-3 py-1 text-deepblue text-xl font-bold">
                  3
                </span>
                <div className="text-lg font-medium">
                  <div>
                    추천인 코드를 제공해 드리기 때문에
                    <span className="text-deepblue">신규가입 시에</span>
                  </div>
                  <div>
                    <span className="text-deepblue">막대한 혜택</span>을 누릴 수
                    있습니다.
                  </div>
                </div>
              </article>
              <article
                className="w-full sm:w-[450px] md:w-[480px] 
              border border-solid border-deepsky rounded-md py-5 px-5 sm:px-10 flex justify-start items-center gap-3"
              >
                <span className="rounded-full bg-slate-100 px-3 py-1 text-deepblue text-xl font-bold">
                  4
                </span>
                <div className="text-lg font-medium">
                  <div>
                    자유게시판을 통해
                    <span className="text-deepblue">
                      누구나 토토사이트 관련 정보를
                    </span>
                  </div>
                  <div>
                    <span className="text-deepblue">공유</span>할 수 있어
                    플레이에 도움을 받을 수 있습니다.
                  </div>
                </div>
              </article>
            </div>
            <div className="pt-5 w-full flex justify-center">
              <article
                className="w-full sm:w-[450px] md:w-[480px] 
              border border-solid border-deepsky rounded-md py-5 px-5 sm:px-10 flex justify-start items-center gap-3"
              >
                <span className="rounded-full bg-slate-100 px-3 py-1 text-deepblue text-xl font-bold">
                  5
                </span>
                <div className="text-lg font-medium">
                  <div>
                    꽁머니팡은
                    <span className="text-deepblue">
                      {" "}
                      게시판 및 검증 사이트를 직접관리
                    </span>
                    하고
                  </div>
                  <div>있기에 사이트 전부를 신뢰할 수 있습니다.</div>
                </div>
              </article>
            </div>
          </div>
          <article className="w-full max-w-[900px] flex justify-center items-center pt-5 px-5 gap-3">
            <Image
              src={talkball}
              width={120}
              height={120}
              alt="sub description"
            ></Image>
            <div className="w-text-description leading-6">
              <p>
                온라인 토토사이트를 이용하는 모든 플레이어의 권리를 보장하기
                위해 노력하고 있습니다. 적지 않은 경력과 노하우로 먹튀검증
                사이트를 운영하고 있는 만큼, 꽁머니팡에서 보증하는 안전한
                업체들을 이용해 보시기 바랍니다.먹튀검증 사이트도 충분한 검증이
                필요하다는 것 잊지 마세요!
              </p>
            </div>
          </article>
          <article className="pt-40 w-full flex flex-col items-center px-3">
            <div className="flex flex-col items-center">
              <div className="w-80 text-2xl font-semibold flex items-center justify-center">
                스포츠커뮤니티
                <span className="text-blue"> GOAT</span>
              </div>
              <div className="w-80 flex justify-center items-center">
                <Image alt="logo" width={260} height={100} src={logo}></Image>
              </div>
              <p className="w-full max-w-[900px] px-5 pt-5 text-description leading-6 flex flex-col items-center ">
                이미 수많은 토토사이트 먹튀증을 해주는 사이트들이 운영되고
                있습니다.꽁머니팡은 토토사이트 먹튀검증을 오랜 기간 진행해
                왔습니다. 그래서 먹튀검증업체 순위에서도 높은 순위를 차지하고
                있습니다. 먹튀검증 커뮤니티를 선택할 때는 먹튀검증업체가 실력이
                있는지, 정확히 검증하고 있는지를 확인해야 합니다.
              </p>
              <div className="w-full  pt-20 px-5 flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-32">
                <h1 className="w-72 text-2xl font-bold">
                  꽁머니팡 사이트는 믿을 수 있습니다!
                </h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      1
                    </div>
                    <div className="w-full max-w-[568px] ">
                      꽁머니팡은 먹튀검증을 직접 진행합니다.
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      2
                    </div>
                    <div className="w-full max-w-[568px] ">
                      꽁머니팡은 토토사이트로부터 보증금을 받지 않고서는 광고를
                      진행하지 않습니다.
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-normal ">
                    <div className="h-4 w-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      3
                    </div>
                    <div className="w-full max-w-[568px] ">
                      꽁머니팡은 적극적인 커뮤니티 활동으로 고객이 먹튀 피해를
                      입지 않도록 정보를 빠르게 업데이트 합니다. 꽁머니팡을
                      이용하는 회원들의 안전한 게임을 가장 우선시 합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  pt-20 px-5 flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-32">
                <h1 className="w-72 text-2xl font-bold">
                  꽁머니팡 사이트 신고 방법
                </h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      1
                    </div>
                    <div className="w-full max-w-[568px] ">
                      먹튀사이트 정보를 신고해 주시면 많은 유저들의 피해를
                      예방할 수 있습니다.
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      2
                    </div>
                    <div className="w-full max-w-[568px] ">
                      먹튀피해를 입었다면 꽁머니팡 고객센터에 직접 문의를
                      주시거나 먹튀신고게시판에 글을 올려주시면 됩니다.
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      3
                    </div>
                    <div className="w-full max-w-[568px] ">
                      먹튀피해를 입으신 플레이어를 위해 꽁머니팡은 구제 방법을
                      함께 찾아나갑니다.
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      4
                    </div>
                    <div className="w-full max-w-[568px] ">
                      토토사이트 이용 시 먹튀 피해를 막고 싶다면 커뮤니티를 통해
                      정보를 얻어 피해가 의심되는 사이트를 피하는 것이
                      좋겠습니다.
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#6885EC] text-white flex items-center justify-center text-sm">
                      5
                    </div>
                    <div className="w-full max-w-[568px] ">
                      먹튀검증 메뉴를 통해서 토토사이트 피해 사실을 공유하면
                      먹튀사이트 근절에 많은 도움이 됩니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <article className="w-full max-w-[900px] flex justify-center items-center pt-5 px-5 gap-3">
              <Image
                src={talkball}
                width={120}
                height={120}
                alt="sub description"
              ></Image>
              <div className="text-description leading-6">
                <p>
                  온라인 토토사이트를 이용하는 모든 플레이어의 권리를 보장하기
                  위해 노력하고 있습니다.적지 않은 경력과 노하우로 먹튀검증
                  사이트를 운영하고 있는 만큼, 꽁머니팡에서 보증하는 안전한
                  업체들을 이용해 보시기 바랍니다.먹튀검증 사이트도 충분한
                  검증이 필요하다는 것 잊지 마세요!
                </p>
              </div>
            </article>
          </article>
        </section>
      </main>
    </div>
  );
}

export default page;
