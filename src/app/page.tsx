"use client";
import GoogleMapViewer from "@/components/GoogleMapViewer";
import ScrollAppearDiv from "@/components/ScrollApperDiv";
import UsersSwiper from "@/components/UsersSwiper";
import { membersData, mentorMembers } from "@/data/members";
import { cn, openInNewTab } from "@/libs/utils";
import { motion, useScroll } from "framer-motion";
import { Dot, Link, Map } from "lucide-react";
import dynamic from "next/dynamic";
import { Noto_Serif_JP } from "next/font/google";
import Image from "next/image";

const CountdownTimer = dynamic(() => import("@/components/CountdownTimer"), {
  ssr: false,
});

const profileVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

// If loading a variable font, you don't need to specify the font weight
const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="">
      <header
        role="banner"
        aria-label="Main header"
        className="sticky top-0 bg-fade-bottom w-full z-50 p-4 pb-8 md:p-8"
      >
        <motion.div
          className="relative w-[140px] h-[70px]"
          whileHover={{ scale: [null, 1.3, 1.1] }}
          transition={{ duration: 0.3 }}
          role="img"
          aria-label="Company logo"
        >
          <Image
            fill
            src={"/img/header_logo.png"}
            alt="Company logo"
            priority
          />
        </motion.div>

        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 bg-[#00AEED] h-[4px] z-50 origin-left"
          role="progressbar"
          aria-valuenow={scrollYProgress.get() * 100} // Assuming scrollYProgress is a fraction between 0 and 1.
          aria-label="Page scroll progress"
        />
      </header>
      <main
        role="main"
        aria-label="Event Details"
        className={cn(
          "max-w-4xl mx-auto w-full relative grid grid-cols-1 md:gid-cols-2 p-6 md:p-4"
        )}
      >
        <section
          aria-labelledby="event-description"
          className="relative flex flex-col md:flex-row justify-around items-center gap-10 min-h-screen mt-[-100px]"
        >
          <motion.p
            id="event-description"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={profileVariants}
            transition={{ duration: 0.4 }}
            className="order-last md:order-first text-normal md:text-sm md:w-1/2"
          >
            이번 이벤트는 일본의 외국계 기업에서 근무하는 전문가들의 생생한
            경험을 직접 듣고, 그들과의 네트워킹을 통해 여러분의 커리어
            네트워크를 확장하는 동시에, Q&A 세션을 통해 구체적이고 맞춤형 조언을
            얻을 수 있는 기회를 제공합니다.
            <br />
            또한, 참가자 모두에게 유용한 자료와 정보를 제공하며, 비슷한 관심사를
            가진 다른 구직자들과의 교류를 통해 서로를 돕고, 소중한 인맥을 형성할
            수 있는 특별한 시간이 될 것입니다.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={profileVariants}
            transition={{ duration: 0.4 }}
            className={cn(
              "flex flex-col text-right text-5xl md:text-7xl w-full font-bold justify-end items-end"
            )}
          >
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
            >
              HRDK
            </motion.h1>
            <motion.p
              className="text-3xl"
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
            >
              일본 외국계 기업
              <br />
              입사 희망자 대상 멘토링 특강
            </motion.p>
            <p className="text-xs mt-4">
              <strong className="text-sm">도쿄 한국인 스터디 모임</strong>
              <br /> <strong className="text-sm">타마스터디</strong>와
              함께합니다.
            </p>
          </motion.div>
        </section>

        <ScrollAppearDiv
          aria-labelledby="company-introduction"
          className="flex flex-col space-y-32 mb-32 md:space-y-0 md:justify-between"
        >
          <div className="flex flex-col mb-16 space-y-4">
            <h2 className="font-bold text-2xl" id="company-introduction">
              주최 단체 소개
            </h2>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 pb-8">
              <Image
                src={"/img/header_logo.png"}
                alt="hrdk logo"
                width={160}
                height={10}
              />
              <div
                className="flex flex-col space-y-2 flex-1"
                aria-label="Key Information about Teamlab"
              >
                <h3
                  className="cursor-pointer hover:underline"
                  onClick={() => openInNewTab("https://www.hrdkorea.or.kr/")}
                >
                  한국산업인력공단
                  <Link className="inline-flex w-4 h-4 pb-1"></Link>
                </h3>
                <ul className="text-xs text-slate-600 flex flex-col space-y-1">
                  <li className="flex">
                    <span>
                      ・ 한국산업인력공단은 평생능력개발, 국가직무능력표준,
                      국가자격시험, 외국인고용지원, 해외취업 및 숙련기술장려 등
                      기업과 근로자의 인적자원개발을 지원하는 사업을 종합적으로
                      수행하고 있습니다.
                    </span>
                  </li>
                  <li className="flex">
                    <span>
                      ・ 인적자원개발에 대한 투자는 개인과 기업 모두가 함께
                      성장하고 발전할 수 있는 지속가능한 길이며 국가 전체의 발전
                      동력을 이끄는 밑거름이 될 것입니다.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 pb-8">
              <Image
                src={"/img/worldjob.png"}
                width={160}
                height={20}
                alt="worldjob logo"
              />
              <div
                className="flex flex-col space-y-2 flex-1"
                aria-label="Key Information about Teamlab"
              >
                <h3
                  className="cursor-pointer hover:underline"
                  onClick={() => openInNewTab("https://www.worldjob.or.kr/")}
                >
                  월드잡플러스
                  <Link className="inline-flex w-4 h-4 pb-1"></Link>
                </h3>
                <ul className="text-xs text-slate-600 flex flex-col space-y-1">
                  <li className="flex">
                    <span>
                      우리 청년들을 글로벌 인재로 육성하고 해외진출을 지원하고자
                      해외취업·창업·인턴·봉사 등 해외진출 관련 정보를 한 곳에서
                      볼 수 있도록 제공하는 해외통합정보 사이트입니다.
                      해외진출의 모든 것! 월드잡플러스에서 편리하게
                      이용해보세요.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAppearDiv>
        <ScrollAppearDiv
          aria-labelledby="company-introduction"
          className="flex flex-col space-y-32 mb-32 md:space-y-0 md:justify-between"
        >
          <div className="flex flex-col mb-16 space-y-4">
            <h2 className="font-bold text-2xl" id="company-introduction">
              협력 단체 소개
            </h2>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 pb-8">
              <Image
                src={"/img/tamastudy.svg"}
                width={160}
                height={20}
                alt="tamastudy logo"
              />
              <div
                className="flex flex-col space-y-2 flex-1"
                aria-label="Key Information about Teamlab"
              >
                <h3
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/tamastudy__tokyo/")
                  }
                >
                  <span>타마스터디</span>
                  <Link className="inline-flex w-4 h-4 pb-1"></Link>
                </h3>
                <ul className="text-xs text-slate-600 flex flex-col space-y-1">
                  <li className="flex">
                    <span>
                      타지에서 혼자 공부하기에는 정보의 부족이 심각했습니다.
                      공부를 목적으로 모이는 사람들에게 항상 자신의 이익을 위해
                      접근하는 사람들 또한 문제 였습니다. 그래서 저희는
                      사람들에게 선한 영향력을 주고 외국에서 서로 힘이 되어주는
                      커뮤니티를 만들기로 결심하였습니다. 그 결과 현재까지도
                      서로 도와주고 함께 성장하는 타마스터디를 운영하고
                      있습니다.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAppearDiv>

        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="event-recruitment"
        >
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-2xl" id="event-recruitment">
              멘토 소개 <small>(총 {mentorMembers.length}명)</small>
            </h2>
            <UsersSwiper users={mentorMembers} />
          </div>
        </ScrollAppearDiv>

        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="event-engineer"
        >
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-2xl" id="event-engineer">
              서포터 소개 <small>(총 {membersData.length}명)</small>
            </h2>
            <div className="relative">
              {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-black z-10">
                <ComingSoon />
              </div> */}
              <UsersSwiper users={membersData} />
            </div>
          </div>
        </ScrollAppearDiv>

        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="event-date"
        >
          <div className="space-y-4">
            <h2 className="font-bold text-2xl mb-4" id="event-date">
              일시
            </h2>
            <time dateTime="2023-09-22T20:00:00Z">
              2023년 11월 21일(화) 19:00 ~ 22:00
            </time>
            <p className="text-sm text-slate-600">* 18:40부터 접수시작</p>
            <CountdownTimer
              targetDate={new Date("2023-09-22T11:00:00Z")}
              aria-label="Event countdown timer"
            />
          </div>
        </ScrollAppearDiv>

        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="event-peoples"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-1">
              <h2 className="font-bold text-2xl">장소</h2>
              <Map
                className="w-4 h-4 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://maps.app.goo.gl/yXuUMjwoooNEQNcd8")
                }
              />
            </div>
            <address
              className={cn(notoSerifJp.className, "text-sm md:text-base")}
            >
              Time Sharing 시부야 월드 우타가와 빌딩 7F
              <br />〒 150-0042 東京都渋谷区宇田川町36-6 ワールド宇田川ビル7F
            </address>
            <div className="w-[275px] h-[320px] md:w-96 md:h-96">
              <GoogleMapViewer
                styles={{
                  container: {
                    width: "100%",
                    height: "100%",
                  },
                }}
                center={{
                  lat: 35.6617823,
                  lng: 139.6974853,
                }}
                zoom={15}
              />
            </div>
          </div>
        </ScrollAppearDiv>
        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="event-peoples"
        >
          <div className="space-y-4">
            <h2 className="font-bold text-2xl" id="event-peoples">
              대상인원
            </h2>
            <ul className="flex flex-col space-y-1" role="list">
              <li className="flex">
                <Dot className="w-4 h-4" aria-hidden="true" />
                일본 현지 외국계 기업 입사 희망자 30명
              </li>
            </ul>
          </div>
        </ScrollAppearDiv>

        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="event-timetable"
        >
          <div className="space-y-4">
            <h2 className="font-bold text-2xl" id="event-timetable">
              타임테이블
            </h2>
            <div role="table" aria-label="Event timetable">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b">
                    <th scope="col" className="py-2 px-4 text-left">
                      시간
                    </th>
                    <th scope="col" className="py-2 px-4 text-left">
                      내용
                    </th>
                    <th scope="col" className="py-2 px-4 text-left">
                      담당자
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">18:40-19:00</td>
                    <td className="py-2 px-4">입장</td>
                    <td className="py-2 px-4">
                      <div>
                        <h5 className="font-normal">【서포터】</h5>
                        <ul className="text-sm">
                          <li>・ 전원</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">19:00-19:10</td>
                    <td className="py-2 px-4">당일 행사 및 식순안내</td>
                    <td className="py-2 px-4">
                      <div>
                        <h5 className="font-normal">【한국산업인력공단】</h5>
                        <ul className="text-sm">
                          <li>・ 이학찬</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">19:10-19:30</td>
                    <td className="py-2 px-4">
                      외국계 기업 특성 안내, 입사 준비과정 노하우, 입사 후 생활
                      공유 등
                    </td>
                    <td className="py-2 px-4">
                      <h5 className="font-normal">【멘토】</h5>
                      <ul className="text-sm">
                        <li>・ 정동기</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">19:30-19:50</td>
                    <td className="py-2 px-4">
                      외국계 기업 특성 안내, 입사 준비과정 노하우, 입사 후 생활
                      공유 등
                    </td>
                    <td className="py-2 px-4">
                      <h5 className="font-normal">【멘토】</h5>
                      <ul className="text-sm">
                        <li>・ 정재성</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">20:00-21:00</td>
                    <td className="py-2 px-4">단체 Q&A</td>
                    <td className="py-2 px-4">
                      <h5 className="font-normal">【멘토】</h5>
                      <ul className="text-sm">
                        <li>・ 정동기</li>
                        <li>・ 정재성</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">21:00</td>
                    <td className="py-2 px-4">이벤트 종료</td>
                    <td className="py-2 px-4">
                      <div>
                        <h5 className="font-normal">【서포터】</h5>
                        <ul className="text-sm">
                          <li>・ 전원</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollAppearDiv>

        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="event-features"
        >
          <div className="space-y-4">
            <h2 className="font-bold text-2xl" id="event-features">
              이번 이벤트의 특징
            </h2>
            <ul className="flex flex-col space-y-1" role="list">
              <li className="flex">
                ・ 이번 이벤트는 일본의 외국계 기업에서 근무하는 전문가들의
                생생한 이야기를 들을 수 있는 절호의 기회입니다. 그들의 경험을
                통해 여러분의 커리어에 대한 통찰력을 얻고, 미래 진로에 대한
                명확한 방향을 설정할 수 있을 것입니다.
              </li>
              <li className="flex">
                ・ 다양한 분야의 전문가들과 직접 네트워킹할 기회가 마련되어
                있어, 여러분의 업계 내 연결망을 확장하고 미래의 커리어 기회를
                열어갈 수 있습니다.
              </li>
              <li className="flex">
                ・ 직접 멘토에게 궁금한 점을 물어보고 맞춤형 조언을 받을 수 있는
                Q&A 세션이 준비되어 있습니다. 이 시간을 통해 구직 과정에서의
                의문점을 해소하고, 더 효과적인 구직 활동을 할 수 있을 것입니다.
              </li>
              <li className="flex">
                ・ 참가자 모두에게 유용한 자료와 정보를 제공하여, 여러분의 구직
                활동을 한층 더 촉진시켜 드릴 예정입니다
              </li>
              <li className="flex">
                ・ 비슷한 관심사를 가진 다른 구직자들과 경험을 공유하고, 서로를
                돕는 소중한 인맥을 만들어갈 수 있는 좋은 기회입니다.
              </li>
              <li className="flex">
                ・ 당일 간단한 핑거 푸드와 음료를 준비할 예정입니다.
              </li>
            </ul>
          </div>
        </ScrollAppearDiv>
        <ScrollAppearDiv
          className="mb-32 space-y-32"
          aria-labelledby="apply-information"
        >
          <div className="space-y-4">
            <h2 className="font-bold text-2xl" id="apply-information">
              신청하기
            </h2>
            {/* <div>마감했습니다. 다음 이벤트를 기대해주세요!</div> */}
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  openInNewTab("https://forms.gle/ZCNDpg9JoD6YTpwH9")
                }
              >
                <Image
                  src={"/img/form-qr.png"}
                  width={120}
                  height={120}
                  alt="google-form"
                  className="w-64 h-64"
                />
              </button>
            </div>
            <p>
              * <strong>Google Form</strong>으로 신청 해주세요.
            </p>
          </div>
        </ScrollAppearDiv>
      </main>
      <footer
        role="contentinfo"
        aria-label="Footer information"
        className="mt-auto w-full bg-[#FFFFFF] border-t border-slate-200 pt-4"
      >
        <div
          className={cn(
            "max-w-4xl mx-auto w-full relative grid grid-cols-1 md:gid-cols-2 p-6 md:p-4",
            "flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-around "
          )}
        >
          <section className={cn("flex items-center")}>
            <h2 className="mr-4" aria-label="Hosted by">
              주최
            </h2>
            <div className="flex gap-4 flex-1">
              <Image
                className="cursor-pointer"
                src={"/img/header_logo.png"}
                width={100}
                height={80}
                alt="world job"
                onClick={() => openInNewTab("https://www.hrdkorea.or.kr/")}
              />
              <Image
                className="cursor-pointer pb-1"
                src={"/img/worldjob_logo.png"}
                width={200}
                height={80}
                alt="world job"
                onClick={() => openInNewTab("https://www.worldjob.or.kr/")}
              />
            </div>
          </section>

          <section
            className={cn("flex items-center")}
            aria-label="In collaboration with"
          >
            <h2 className="mr-4">협력</h2>
            <div className="flex space-x-4 justify-center items-center">
              <Image
                className="cursor-pointer"
                src={"/img/tamastudy.svg"}
                width={140}
                height={70}
                alt="Tamastudy"
                onClick={() =>
                  openInNewTab("https://www.instagram.com/tamastudy__tokyo/")
                }
              />
            </div>
          </section>
        </div>
        <p className="text-center py-4 text-xs">
          &copy; {new Date().getFullYear()} Tamstudy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
