interface Goal {
  title: string;
  desc: string;
}

interface DocChaseData {
  about: AboutProps;
  problem: {
    desc: string;
  };
  goals: Goal[];
  conclusion: {
    achievements: string[];
  };
}

declare module '@/json/docchase.json' {
  const value: DocChaseData;
  export default value;
} 