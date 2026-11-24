export const profile = {
  name: "Sai Saketh Nagavalli",
  email: "saisakethnagavalli@gmail.com",
  location: "Delray Beach, Florida",
  github: "https://github.com/SaiSakethN",
  linkedin: "https://www.linkedin.com/in/sai-saketh-nagavalli/",
  resume: "/resume/Sai_Saketh_Nagavalli_Resume.pdf",
  intro:
    "I build retrieval systems, predictive models, and evaluation workflows that turn complex data into useful, dependable AI experiences.",
};
export const experience = [
  {
    "company": "Included Health",
    "role": "Data Scientist, Gen AI",
    "dates": "Jan 2026 — Present",
    "number": "01",
    "summary": "Grounded navigation, recommendation quality and evaluation.",
    "points": [
      "Built a RAG member-navigation assistant over 1M+ provider, benefits and clinical records; resume-reported grounded-answer accuracy improved from 84% to 93%, with 22% fewer live-agent escalations.",
      "Engineered dense retrieval, metadata filtering and cross-encoder reranking; reported nDCG@10 improved by 0.14 with p95 latency under 1.8 seconds.",
      "Established 1,500+ labeled evaluation scenarios and calibrated LLM-as-judge against human reviewers at Cohen’s kappa 0.82.",
      "Ran personalization experiments across 5M+ interactions; reported 9% higher self-service resolution and a 17-percentage-point improvement in top-5 recommendation precision over a heuristic baseline.",
      "Partnered with Product, ML Engineering and clinical reviewers on HITL and monitoring, retiring roughly 400 manual reviews monthly."
    ],
    "tags": [
      "RAG",
      "LLM evaluation",
      "Learning to rank",
      "PySpark",
      "Experimentation"
    ]
  },
  {
    "company": "Neon IT Systems",
    "role": "Data Scientist",
    "dates": "Feb 2022 — Jul 2024",
    "number": "02",
    "summary": "Predictive modeling, experimentation and product analytics.",
    "points": [
      "Consolidated 10M+ user, transaction and clickstream records with PySpark, SQL and ETL pipelines into reusable features.",
      "Trained XGBoost and logistic-regression churn/propensity models; resume reports 0.86 ROC-AUC and an 11% reduction in monthly churn from informed retention campaigns.",
      "Applied K-means/RFM segmentation, sequential A/B testing and uplift modeling to support prioritization and recommendation decisions.",
      "Developed NLP workflows over 500K+ support tickets and survey responses; reported an 18% reduction in ticket handling time.",
      "Forecasted demand with SARIMA and boosted regressors, automated AWS ML pipelines, and mentored three analysts on drift detection and retraining."
    ],
    "tags": [
      "XGBoost",
      "SQL / PySpark",
      "NLP",
      "AWS",
      "Statistics"
    ]
  }
];
export const skills = [
  {
    title: "Programming & data",
    icon: "data",
    items: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "Apache Spark"],
  },
  {
    title: "Generative AI",
    icon: "ai",
    items: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector search",
      "Reranking",
      "Prompt engineering",
      "LLM evaluation",
      "HITL",
    ],
  },
  {
    title: "Machine learning",
    icon: "model",
    items: [
      "Scikit-learn",
      "XGBoost",
      "Classification",
      "Regression",
      "Clustering",
      "Feature engineering",
    ],
  },
  {
    title: "Deep learning & NLP",
    icon: "nlp",
    items: [
      "TensorFlow",
      "Keras",
      "Neural networks",
      "Sentiment analysis",
      "Text classification",
      "TF-IDF",
    ],
  },
  {
    title: "MLOps & cloud",
    icon: "cloud",
    items: [
      "AWS",
      "Docker",
      "ML pipelines",
      "Batch inference",
      "Model deployment",
      "Monitoring",
      "Drift detection",
    ],
  },
  {
    title: "Product analytics",
    icon: "analytics",
    items: [
      "A/B testing",
      "Funnel analysis",
      "Cohort analysis",
      "Segmentation",
      "Hypothesis testing",
      "Behavioral analytics",
    ],
  },
];
export type Project = {
  id: string; title: string; category: string; company: string;
  summary: string; metric: string; metricLabel: string; tags: string[];
  problem: string; approach: string[]; workflow: string[]; outcome: string;
  scope: string; status: string; github: string; demo?: string;
  image: string; documentation: string; lastVerified: string;
};
export { default as projects } from "./projects.json";
export const certifications = [
  ["AWS Academy Data Analytics", "AWS Academy"],
  ["AWS Academy Cloud Foundations", "AWS Academy"],
  ["PCAP — Programming Essentials in Python", "Cisco Networking Academy"],
  ["Data Analysis with Python", "freeCodeCamp"],
  ["Data Analytics Virtual Internship", "EduSkills Foundation"],
];

export function gmailCompose(subject = "", body = "") {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: profile.email,
  });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}
