export const profile = {
  name: "Sai Saketh Nagavalli",
  email: "saisakethnagavalli@gmail.com",
  phone: "+1 (561) 303-9292",
  phoneHref: "tel:+15613039292",
  location: "Delray Beach, Florida",
  github: "https://github.com/SaiSakethN",
  linkedin: "https://www.linkedin.com/in/sai-saketh-nagavalli/",
  resume: "/resume/Sai_Saketh_Nagavalli_Resume.pdf",
  intro:
    "I build retrieval systems, predictive models, and evaluation workflows that turn complex data into useful, dependable AI experiences.",
};
export const experience = [
  {
    company: "Included Health",
    role: "GenAI Data Scientist",
    dates: "Jan 2026 — Present",
    number: "01",
    summary: "Grounded answers. More relevant care.",
    points: [
      "Architected a RAG member-navigation workflow, improving grounded response accuracy from 84% to 93%.",
      "Built hybrid retrieval across 1M+ provider, benefits, and clinical records with vector search, metadata filtering, and reranking.",
      "Created 1,500+ evaluation scenarios for groundedness, hallucination, safety, and escalation.",
      "Improved provider-recommendation precision by 17%; analyzed 5M+ member interactions for personalization and experiments.",
      "Partnered with Product, ML Engineering, Analytics, and clinical teams on HITL, A/B testing, and monitoring, reducing roughly 400+ manual reviews monthly.",
    ],
    tags: ["Python", "RAG", "LLM evaluation", "PySpark", "Vector search"],
  },
  {
    company: "Neon IT Systems",
    role: "Product Data Scientist",
    dates: "Feb 2022 — Jul 2024",
    number: "02",
    summary: "Understanding behavior. Predicting what comes next.",
    points: [
      "Processed 10M+ user, transaction, and product-interaction records into reusable analytics datasets and model features.",
      "Developed classification, regression, and XGBoost models for churn, conversion, and propensity to support targeting and retention.",
      "Used cohorts, funnels, clustering, lifecycle metrics, and A/B testing to guide product decisions.",
      "Processed 500K+ support tickets, surveys, and feedback records using TF-IDF, embeddings, sentiment analysis, and text classification.",
      "Benchmarked TensorFlow/Keras models; automated ML pipelines and deployed Docker-based Python services on AWS with monitoring and retraining support.",
    ],
    tags: ["XGBoost", "NLP", "Spark", "AWS", "Docker", "A/B testing"],
  },
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
  id: string;
  title: string;
  category: string;
  company: string;
  summary: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  problem: string;
  approach: string[];
  workflow: string[];
  outcome: string;
  scope: string;
};
export const projects: Project[] = [
  {
    id: "member-navigation",
    title: "Member navigation & care recommendations",
    category: "Generative AI",
    company: "Included Health",
    summary:
      "A grounded AI workflow connecting member questions to relevant benefits, providers, and care information.",
    metric: "84% → 93%",
    metricLabel: "grounded response accuracy",
    tags: ["RAG", "Hybrid retrieval", "LLM evaluation"],
    problem:
      "Members need useful answers to care and benefits questions, while relevant information is distributed across large provider, benefits, and clinical datasets. Responses must be supported by retrieved information.",
    approach: [
      "Developed hybrid retrieval using vector search, metadata filtering, and reranking across 1M+ records.",
      "Provided relevant retrieved context to an LLM to support grounded member responses.",
      "Created 1,500+ evaluation scenarios covering groundedness, hallucination, safety, and escalation.",
      "Built provider-matching models using claims, member preferences, and provider-quality data; analyzed 5M+ member interactions for personalization.",
      "Collaborated on HITL, A/B testing, and production monitoring with engineering, product, analytics, and clinical teams.",
    ],
    workflow: [
      "Member query",
      "Hybrid retrieval & filters",
      "Reranked context",
      "Grounded LLM response",
      "Evaluation & human review",
    ],
    outcome:
      "Grounded response accuracy increased from 84% to 93%. Recommendation precision improved by 17%, and the production workflow reduced roughly 400+ manual reviews per month.",
    scope:
      "High-level professional case study. The workflow summarizes documented components; internal data, prompts, model vendors, and infrastructure details are omitted.",
  },
  {
    id: "churn-conversion",
    title: "Customer churn & conversion prediction",
    category: "Machine learning",
    company: "Neon IT Systems",
    summary:
      "Behavioral features and predictive models to inform customer targeting and retention decisions.",
    metric: "10M+",
    metricLabel: "records across the product-data work",
    tags: ["XGBoost", "Feature engineering", "AWS"],
    problem:
      "Product teams need to understand customer behavior and identify users likely to churn or convert to support relevant targeting and retention decisions.",
    approach: [
      "Prepared reusable datasets and features from user, transaction, and product-interaction data using Python, SQL, Pandas, and Spark.",
      "Trained classification, regression, and XGBoost models for churn, conversion, and user propensity.",
      "Automated feature processing, model validation, training, and batch inference through reusable pipelines.",
      "Supported Docker-based Python services on AWS and coordinated monitoring of drift, feature quality, and prediction distributions.",
    ],
    workflow: [
      "Product data",
      "Reusable features",
      "Predictive models",
      "Validation & batch inference",
      "Targeting & monitoring",
    ],
    outcome:
      "Supported targeting and retention decisions across multiple product segments and made recurring modeling workflows more repeatable. A model-specific performance uplift is not disclosed in the supplied sources.",
    scope:
      "This case study groups related predictive-modeling work at Neon. The 10M+ scale describes the broader product dataset, rather than a specific training run.",
  },
  {
    id: "feedback-intelligence",
    title: "Customer feedback intelligence",
    category: "NLP",
    company: "Neon IT Systems",
    summary:
      "Turning support tickets, surveys, and unstructured feedback into signals product teams can use.",
    metric: "500K+",
    metricLabel: "text records processed",
    tags: ["TF-IDF", "Embeddings", "TensorFlow"],
    problem:
      "Large volumes of unstructured customer feedback are difficult to analyze consistently. Product teams need usable sentiment and classification signals from this text.",
    approach: [
      "Built text-processing workflows for support tickets, surveys, and user feedback.",
      "Used TF-IDF and embeddings for text representations, alongside sentiment analysis and text classification.",
      "Benchmarked TensorFlow/Keras neural networks against statistical and tree-based baselines for behavioral and text-prediction use cases.",
    ],
    workflow: [
      "Customer feedback",
      "Text preparation",
      "TF-IDF / embeddings",
      "Sentiment & classification",
      "Product insights",
    ],
    outcome:
      "Processed 500K+ text records to support customer feedback analytics. Exact production categories and model performance metrics are not disclosed.",
    scope:
      "Professional work summary with a conceptual workflow. No proprietary ticket examples or invented classification taxonomy are included.",
  },
  {
    id: "product-analytics",
    title: "Product analytics & customer segmentation",
    category: "Analytics",
    company: "Neon IT Systems",
    summary:
      "Cohorts, funnels, and experiments that translate user behavior into informed product decisions.",
    metric: "A/B",
    metricLabel: "experimentation & product decisions",
    tags: ["Clustering", "Cohorts", "Hypothesis testing"],
    problem:
      "Product teams need to understand differences in customer behavior, prioritize improvements, and determine whether product changes improve defined success metrics.",
    approach: [
      "Segmented users through behavioral cohorts, clustering, funnels, and lifecycle metrics.",
      "Helped identify high-value users and prioritize product feature improvements.",
      "Evaluated onboarding, engagement, and recommendation experiments through A/B testing.",
      "Defined success metrics and translated statistically significant findings into product decisions.",
    ],
    workflow: [
      "Behavioral data",
      "Cohorts & funnels",
      "Segmentation",
      "Controlled experiments",
      "Product decisions",
    ],
    outcome:
      "Helped teams identify high-value users, prioritize features, and interpret experiments. No unsupported conversion or revenue uplift is claimed.",
    scope:
      "A thematic case study of documented analytics responsibilities. The workflow is an overview, rather than a screenshot of an internal system.",
  },
];
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
