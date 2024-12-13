interface Goal {
  title: string;
  desc: string;
}

interface CaseStudyData {
  about: AboutProps;
  title: string;
  hero_img: string;
  problem: {
    desc: string;
  };
  goals: Goal[];
  conclusion: {
    achievements: string[];
  };
}

declare module '@/json/*.json' {
  const value: CaseStudyData;
  export default value;
} 