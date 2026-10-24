import { useId } from "react";
function Box({
  x,
  y,
  w = 130,
  title,
  sub,
  active = false,
}: {
  x: number;
  y: number;
  w?: number;
  title: string;
  sub: string;
  active?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height="60"
        rx="3"
        className={active ? "diagram-box active-box" : "diagram-box"}
      />
      <text x={x + 13} y={y + 25} className="diagram-title">
        {title}
      </text>
      <text x={x + 13} y={y + 43} className="diagram-sub">
        {sub}
      </text>
    </g>
  );
}
export default function ProjectPreview({ index }: { index: number }) {
  const id = useId();
  const descriptions = [
    "Member question flows through hybrid retrieval and reranked context to a grounded response and evaluation.",
    "Product data becomes behavioral features, predictive models, and batch inference for targeting and retention.",
    "Support tickets and surveys become text representations, sentiment signals, and product insights.",
    "Behavioral data informs cohorts, funnels, segmentation, and controlled experiments for product decisions.",
  ];
  return (
    <div className={"project-art art-" + index}>
      <div className="preview-heading">
        <span>
          {
            [
              "RETRIEVAL & EVALUATION",
              "PREDICTION PIPELINE",
              "TEXT TO SIGNAL",
              "BEHAVIOR TO DECISIONS",
            ][index]
          }
        </span>
        <span aria-hidden="true">0{index + 1} /</span>
      </div>
      <svg viewBox="0 0 500 220" role="img" aria-labelledby={id}>
        <title id={id}>{descriptions[index]}</title>
        {index === 0 && (
          <>
            <path
              className="diagram-line"
              d="M158 65H185 M315 65H342 M407 95V143H250V160 M250 160H93V95"
            />
            <Box x={28} y={35} title="Question" sub="Member query" />
            <Box
              x={185}
              y={35}
              title="Retrieve"
              sub="Hybrid + filters"
              active
            />
            <Box x={342} y={35} title="Rerank" sub="Relevant context" />
            <rect
              x="139"
              y="130"
              width="222"
              height="62"
              rx="3"
              className="diagram-box active-box"
            />
            <text x="250" y="156" textAnchor="middle" className="diagram-title">
              Grounded response
            </text>
            <text x="250" y="176" textAnchor="middle" className="diagram-sub">
              Evaluation + human review
            </text>
          </>
        )}
        {index === 1 && (
          <>
            <path
              className="diagram-line"
              d="M158 65H185 M315 65H342 M407 95V157H276"
            />
            <Box x={28} y={35} title="Product data" sub="User / transactions" />
            <Box x={185} y={35} title="Features" sub="Python · SQL · Spark" />
            <Box
              x={342}
              y={35}
              title="Models"
              sub="Churn / conversion"
              active
            />
            <text x="28" y="152" className="diagram-emphasis">
              10M+
            </text>
            <text x="29" y="176" className="diagram-sub">
              broader product dataset
            </text>
            <Box
              x={275}
              y={130}
              w={197}
              title="Batch inference"
              sub="Targeting + monitoring"
            />
          </>
        )}
        {index === 2 && (
          <>
            <path
              className="diagram-line"
              d="M158 65H185 M315 65H342 M407 95V150H93V95"
            />
            <Box x={28} y={35} title="Feedback" sub="Tickets / surveys" />
            <Box
              x={185}
              y={35}
              title="Represent"
              sub="TF-IDF / embeddings"
              active
            />
            <Box x={342} y={35} title="Classify" sub="Sentiment + text" />
            <rect
              x="153"
              y="127"
              width="194"
              height="60"
              rx="3"
              className="diagram-box"
            />
            <text x="250" y="153" textAnchor="middle" className="diagram-title">
              Product insights
            </text>
            <text x="250" y="173" textAnchor="middle" className="diagram-sub">
              500K+ text records
            </text>
          </>
        )}
        {index === 3 && (
          <>
            <path
              className="diagram-line"
              d="M158 95H185 M315 65H342 M315 155H342 M169 65V155H185"
            />
            <Box x={28} y={65} title="Behavior" sub="Product interactions" />
            <Box x={185} y={35} title="Cohorts" sub="Funnels + lifecycle" />
            <Box x={185} y={125} title="Segments" sub="Behavioral clusters" />
            <Box x={342} y={35} title="Experiments" sub="A/B testing" active />
            <Box
              x={342}
              y={125}
              title="Decisions"
              sub="Product priorities"
              active
            />
          </>
        )}
      </svg>
      <span className="preview-caption">
        Conceptual workflow · no internal screenshots
      </span>
    </div>
  );
}
