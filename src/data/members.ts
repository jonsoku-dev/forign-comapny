export interface User {
  id: string;
  name: string;
  img: string;
  role?: string;
  team: string;
  description?: string;
  zenn?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  korean?: boolean;
  japanese?: boolean;
  us?: boolean;
}

export const mentorMembers: User[] = [
  {
    description: `2009 중앙대학교 B.E., Computer Science & Engineering 졸업\n2012 오사카대학교 MS, Computer Science 졸업\n2012 ~ 2016 Software Engineer(NEC) Scalable Database Engine 개발\n2016 ~ 현재 Engineering Analyst(Google) 검색품질향상을 위한 데이터 분석업무 담당\n`,
    id: generateUUID(),
    img: "/img/users/dongi.png",
    name: "정동기",
    role: "Engineering Analyst",
    team: "Google Japan",
    korean: true,
    japanese: true,
    us: true,
  },
  {
    description:
      "토목공학과 석사 졸업 후, 빅4 컨설팅, 미국계 헬스케어 그리고 독일계 자동차 기업에서 5년차 데이터 사이언티스트로 재직중.",
    id: generateUUID(),
    img: "/img/users/jae.png",
    name: "Jai",
    role: "Data scientist",
    team: "D사",
    korean: true,
    japanese: true,
    us: true,
  },
];

export const membersData: User[] = [
  {
    id: generateUUID(),
    img: "/img/users/hack.png",
    name: "이학찬",
    team: "한국산업인력공단",
    korean: true,
    japanese: true,
  },
  {
    id: generateUUID(),
    img: "/img/users/jongseok-lee.jpg",
    name: "이종석",
    team: "LINEヤフー",
    korean: true,
    japanese: true,
    linkedin: "https://www.linkedin.com/in/jongseok-lee-785216191/",
  },
];

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
