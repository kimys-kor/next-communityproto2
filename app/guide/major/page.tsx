import Mttp from "../(components)/Mttp";
import Image from "next/image";
import major from "/public/images/major.png";

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
            src={major}
          ></Image>
          <div className="text-4xl font-semibold px-3">
            <span className="text-blue">메이저 놀이터 </span>와
            <span className="text-blue"> 메이저 사이트 </span>
          </div>
          <div className="w-full lg:w-1/3 px-5">
            <p className="break-keep py-5 leading-6 text-sm font-medium text-description">
              토토사이트를 이용하면서 중요한 것은 먹튀 피해를 당하지 않는
              것입니다. 그래서 안전한 놀이터에서 게임을 즐기는 것이 중요한데요.
              많은 유저들이 먹튀 피해를 막기 위해 메이저 놀이터를 이용하고
              계십니다. 메이저놀이터 순위를 추천 업체들로부터 확인하고
              메이저놀이터나 메이저 사이트를 선택하시는 분들이 많은데요.
            </p>
          </div>
          <div className="pt-20 w-full flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">
              과연, 메이저 놀이터 순위 믿을 수 있을까요?
            </p>
            <article className="block lg:flex justify-center py-20 px-5 gap-20 border-solid border-b border-slate-200">
              <div className="text-2xl px-5">
                <p className="font-medium">메이저 놀이터 순위,</p>
                <div className="font-semibold">
                  추천 믿을 수 <span className="text-blue">없는</span> 이유
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-5">
                <p className="break-keep py-10 text-sm font-medium">
                  결론부터 말하자면 메이저 놀이터 순위와 추천은 믿기 어려운
                  경우가 많습니다. 여러 사이트들을 살펴보면 메이저놀이터 순위가
                  다 다르다는 것을 알 수가 있습니다. 그 이유는 메이저놀이터를
                  커뮤니티 사이트마다 각기 다르게 평가하고 순위를 산정하기
                  때문입니다. 일부 업체에서는 메이저 놀이터가 아님에도
                  메이저놀이터 순위에 올려 이를 광고하는 경우도 있습니다.
                  고아고비를 받고 메이저 놀이터 목록을 제공하거나 메이저놀이터
                  순위를 매기는 사이트들은 먹튀검증을 제대로 하지 않고 추천할
                  가능성이 높습니다. 이 경우에는 먹튀사이트를 막기 어렵습니다.
                </p>
              </div>
            </article>
            <article className="block lg:flex justify-center py-20 px-5 gap-20">
              <div className="text-2xl px-5">
                <p className="font-medium">메이저 놀이터 순위,</p>
                <div className="font-semibold">
                  믿을 수 <span className="text-blue">있는</span> 정보
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-5">
                <p className="break-keep py-10 text-sm font-medium">
                  메이저놀이터 순위나 메이저사이트 추천 정보를 얻고 싶다면
                  믿을만한 먹튀검증 커뮤니 티를 이용해야 합니다. 믿을만한
                  먹튀검증 커뮤니티의 특징은 직접 먹튀검증을 한다는점,여러
                  유저들이 함께 정보를 공유하며 정확한 추천 정보를 제공한다는
                  점입니다.꽁머니팡은 토토사이트 커뮤니티로는 매우 활성화되어
                  있는 사이트이고 직접 먹튀검증을 하기 때문에 먹튀 에방이 100%
                  가능합니다.토토 메이저 놀이터 순위나목록을 확인하고 싶다면{" "}
                  <span className="text-blue">꽁머니팡</span>을 이용하시면
                  되겠습니다.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
