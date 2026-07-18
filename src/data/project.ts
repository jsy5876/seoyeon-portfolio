export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;

  duration?: string;
  teamsize?: string;
  detail?: string;
  features?: string[];
  learned?: string[];
  images?: string[];
  troubleshooting?: {
    problem: string;
    solution: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "습관모아",
    description:
      "사용자가 매일의 습관을 기록하고, 달성률과 통계를 확인할 수 있도록 제작한 습관 관리 웹앱입니다.",
    tech: ["React", "Vite", "CSS", "localStorage", "Gemini API", "Vercel"],
    github: "https://github.com/jsy5876/habit_project",
    demo: "https://habit-project-bay.vercel.app/",
    image: "/images/projects/habit-app-thumbnail.png",
    images: [
      "/images/projects/habit-app-thumbnail.png",
      "/images/projects/habit-app-main.png",
      "/images/projects/habit-app-register.png",
      "/images/projects/habit-app-memo.png",
      "/images/projects/habit-app-statistic.png",
      "/images/projects/habit-app-advice.png",
    ],
    duration: "2026.04 ~ 2026.05",
    teamsize: "개인 프로젝트",
    detail:
      "하루 습관을 기록하고, 월간 통계와 AI 조언을 확인할 수 있는 습관 관리 웹앱입니다. 캘린더 기반으로 날짜별 기록을 남기고, 월간 성공률·주간 추세를 확인할 수 있으며 기록 데이터를 바탕으로 AI 피드백을 제공하도록 구현했습니다.",
    features: [
      "습관 등록 및 수정",
      "날짜별 메모 / 습관 기록",
      "월간 성공률 및 기록 일수 확인",
      "월간 습관 실행 추이 그래프 제공",
      "기록 데이터를 바탕으로 AI 조언 생성",
    ],
    troubleshooting: [
      { 
        problem: "초기에는 Vite 개발 서버만 실행하여 API 라우트가 동작하지 않았습니다.",
        solution: "이후 vercel dev를 사용해 로컬에서 API 함수까지 함께 테스트하도록 수정했습니다.",
      },
      {
        problem: "Gemini SDK 사용 시 API 키가 정상적으로 전달되지 않는 오류가 발생했습니다.",
        solution: "SDK 방식 대신 REST 방식으로 변경하여 x-goog-api-key 해더에 API 키를 직접 포함하여 요청하도록 수정했습니다. 서버에서만 API 요청을 수행하도록 구조를 분리했습니다.",
      },
      {
        problem: "Gemini API 사용 중 서버 혼잡으로 인한 503 오류와 사용량 제한에 따른 429 오류가 발생했으며, 버튼 연타로 불필요한 요청이 반복될 수 있었습니다.",
        solution: "상태 코드별 안내 문구를 제공하고, 기록 부족 시 호출 제한, 일일 호출 횟수 제한, 버튼 cooldown을 적용해 중복 요청을 줄였습니다.",
      }
    ],
    learned: [
      "단순한 UI 구현을 넘어서 상태 관리, 로컬 저장, 통계 계산, 외부 API 연동, 배포 및 환경변수 관리까지 경험할 수 있었습니다. 특히 AI 기능 연동 과정에서 발생한 문제를 단계적으로 분리하고 해결하면서 디버깅 과정과 문제 해결 능력의 중요성을 크게 느꼈습니다.",
    ],
  },
  {
    title: "여기약",
    description:
      "지역과 운영 유형 필터를 기반으로 약국 정보를 제공하는 반응형 웹앱입니다.",
    tech: ["React", "Vite", "CSS", "Firebase", "Kakao Map", "Vercel"],
    github: "https://github.com/jsy5876/pharmacy-app",
    demo: "https://pharmacy-app-nu.vercel.app/",
    image: "/images/projects/pharmacy-app-thumbnail.png",
    images: [
      "/images/projects/pharmacy-app-thumbnail.png",
      "/images/projects/pharmacy-app-main.png",
      "/images/projects/pharmacy-app-pharmacyadd.png",
      "/images/projects/pharmacy-app-pharmacyinfo.png",
      "/images/projects/pharmacy-app-search.png",
    ],
    duration: "2026.05 ~ 2026.06",
    teamsize: "개인 프로젝트",
    detail:
      "사용자가 지역과 운영 유형을 선택하여 약국 정보를 빠르게 찾을 수 있도록 만든 웹앱입니다. 공공데이터를 기반으로 약국 목록을 제공하고, 카카오맵을 활용해 위치 정보를 확인할 수 있도록 구현했습니다.",
    features: [
      "지역별 약국 필터링",
      "연중무휴, 주말, 공휴일 운영 약국 구분",
      "카카오맵 기반 위치 표시",
      "모바일 반응형 UI 구현",
      "Firebase 기반 데이터 관리",
    ],
    troubleshooting: [
      { 
        problem: "브라우저에서 공공데이터 API를 직접 호출할 때 CORS 정책으로 요청이 차단되었습니다.",
        solution: "로컬 개발 환경에 Vite Proxy를 적용해 API 요청을 개발 서버가 대신 전달하도록 구성했습니다.",
      },
      { 
        problem: "전체 약국 데이터를 한 번에 요청했을 때 502 Bad Gateway 오류가 발생해 일부 데이터를 불러오지 못했습니다.",
        solution: "총 1,450개의 데이터를 1,000개와 450개로 나누어 요청한 뒤 하나의 배열로 병합했습니다.",
      },
      { 
        problem: "약국마다 운영시간의 존재 여부와 데이터 형식이 달라 영업 상태와 운영 유형 필터가 정확하게 동작하지 않았습니다.",
        solution: "시간 변환, 데이터 존재 여부 확인, 요일별 운영 판단 로직을 공통 유틸 함수로 분리해 일관된 기준으로 처리했습니다.",
      }
    ],
    learned: [
      "공공데이터와 지도 API를 연동하며 데이터 형식과 예외 상황을 고려한 로직 설계의 중요성을 배웠습니다. Firebase를 활용해 사용자 제보 데이터를 저장하고 승인 상태에 따라 관리하면서, 데이터의 등록·조회·수정으로 이어지는 흐름을 효율적으로 구성할 수 있었습니다. 이를 통해 화면 구현을 넘어 실제 서비스의 데이터 정확성과 관리 방식까지 고민하는 경험을 쌓았습니다.",
    ],
  },
  {
    title: "포트폴리오",
    description:
      "Next.js와 TypeScript를 기반으로 제작한 개인 포트폴리오 웹페이지입니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "#",
    demo: "#",
    image: "/images/projects/portfolio-page-thumbnail.png",
    images: [
      "/images/projects/portfolio-page-main.png",
      "/images/projects/portfolio-page-skills.png",
      "/images/projects/portfolio-page-thumbnail.png"
    ],
    duration: "2026.07 ~",
    teamsize: "개인 프로젝트",
    detail:
      "자기소개, 기술 스택, 프로젝트를 한눈에 볼 수 있도록 제작한 개인 포트폴리오 웹페이지입니다.",
    features: [
      "프로젝트 상세 모달",
      "프로젝트 이미지 슬라이드",
      "반응형 레이아웃",
      "기술 스택 및 프로젝트 정보 제공",
    ],
    learned: [
      "Next.js와 TypeScript, Tailwind CSS를 활용해 직접 포트폴리오를 설계하고 구현하며 컴포넌트 기반 개발 방식에 익숙해질 수 있었습니다. 반응형 레이아웃과 모달, 스크롤 애니메이션을 적용하면서 다양한 화면 환경과 사용자 경험을 고려하는 방법을 배웠습니다. 단순히 프로젝트를 나열하는 데 그치지 않고, 저의 개발 과정과 문제 해결 역량을 효과적으로 전달하는 화면을 완성하고자 노력했습니다.",
    ],
  },
];