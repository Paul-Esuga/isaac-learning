import FrancisPFP from "../assets/images/community-images/francis-pfp.png";
import AdePFP from "../assets/images/community-images/ade-pfp.png";
import ChineduPFP from "../assets/images/community-images/chinedu-pfp.png";
import type { BookmarkProps } from "../components/bookmark/Boomark";

const CommunityQuestions: BookmarkProps[] = [
  {
    id: "1",
    img: FrancisPFP,
    name: "Francis Adeleke",
    time: "3h ago",
    title: "How do I handle poor performance during a probation period?",
    body: "I'm managing a new hire who's not meeting expectations during their probation. I've given feedback, but there's been little improvement. I'm unsure how to approach this without affecting morale. Has anyone handled a similar situation? What are the best practices or scripts you've used in a respectful and compliant way?",
    like_count: "1.1k",
    comment_count: "225",
    isBookmarked: false,
    comments: [
      {
        id: "1",
        img: FrancisPFP,
        name: "John Adekola",
        time: "2h ago",
        body: "I'm managing a new hire who's not meeting expectations during their probation. I've given feedback, but there's been little improvement. I'm unsure how to approach this without affecting morale. ",
        like_count: " ",
      },
      {
        id: "2",
        img: FrancisPFP,
        name: "sharon Adeleke",
        time: "3h ago",
        body: "I'm managing a new hire who's not meeting expectations during their probation. I've given feedback, but there's been little improvement. I'm unsure how to approach this without affecting morale. ",
        like_count: "3",
      },
      {
        id: "3",
        img: FrancisPFP,
        name: "Sharon Adeleke",
        time: "3h ago",
        body: "I'm managing a new hire who's not meeting expectations during their probation. I've given feedback, but there's been little improvement. I'm unsure how to approach this without affecting morale. ",
        like_count: "5",
      },
    ],
  },
  {
    id: "2",
    img: AdePFP,
    name: "Ade Johnson",
    time: "3h ago",
    title:
      "What's a fair turnaround time to respond to candidates after interviews?",
    body: "I work in a fast-paced startup and struggle to keep candidates updated post-interview. How long is considered acceptable before it feels disrespectful or damages our employer brand? Would love to hear how others handle this.",
    like_count: "225",
    comment_count: "225",
    isBookmarked: false,
  },
  {
    id: "3",
    img: ChineduPFP,
    name: "Chinedu Lucas",
    time: "3h ago",
    title: "Should we disclose salary ranges in job ads?",
    body: "There's internal debate about whether being transparent helps or hurts us competitively. Have you seen better applicant quality when salary ranges are shown? Any legal risks?",
    like_count: "20k",
    comment_count: "5k",
    isBookmarked: false,
  },
];

export default CommunityQuestions;
