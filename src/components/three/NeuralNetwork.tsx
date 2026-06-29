import { motion } from 'motion/react';

/**
 * SVG-based decorative neural network visualization.
 * 3 layers (input → hidden → output) with animated connections and pulsing nodes.
 */

interface Node {
  x: number;
  y: number;
  layer: number;
}

function generateLayers(viewW: number, viewH: number): Node[][] {
  const layers: Node[][] = [];
  const counts = [4, 6, 3];
  const layerXs = [viewW * 0.2, viewW * 0.5, viewW * 0.8];

  counts.forEach((count, li) => {
    const nodes: Node[] = [];
    const spacing = Math.min(viewH / (count + 1), 70);
    const startY = (viewH - spacing * (count - 1)) / 2;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: layerXs[li],
        y: startY + spacing * i,
        layer: li,
      });
    }
    layers.push(nodes);
  });

  return layers;
}

export default function NeuralNetwork() {
  const VIEW_W = 400;
  const VIEW_H = 280;

  const layers = generateLayers(VIEW_W, VIEW_H);
  const [input, hidden, output] = layers;

  /* Generate connections between adjacent layers */
  const connections: { x1: number; y1: number; x2: number; y2: number; fromLayer: number }[] = [];

  input.forEach((n) => {
    hidden.forEach((h) => {
      connections.push({ x1: n.x, y1: n.y, x2: h.x, y2: h.y, fromLayer: 0 });
    });
  });

  hidden.forEach((h) => {
    output.forEach((o) => {
      connections.push({ x1: h.x, y1: h.y, x2: o.x, y2: o.y, fromLayer: 1 });
    });
  });

  const allNodes = layers.flat();

  return (
    <div className="w-full max-w-md mx-auto" aria-hidden="true">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connections */}
        {connections.map((c, i) => (
          <motion.line
            key={i}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="var(--color-accent)"
            strokeWidth={1}
            opacity={0.15}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{
              duration: 1.2,
              delay: 0.3 + c.fromLayer * 0.4 + i * 0.015,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Nodes */}
        {allNodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={6}
            fill="var(--color-accent)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              scale: {
                duration: 2.5,
                repeat: Infinity,
                delay: 0.8 + node.layer * 0.3 + i * 0.08,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                delay: 0.8 + node.layer * 0.3 + i * 0.08,
                ease: 'easeInOut',
              },
            }}
          />
        ))}

        {/* Node glow rings */}
        {allNodes.map((node, i) => (
          <motion.circle
            key={`glow-${i}`}
            cx={node.x}
            cy={node.y}
            r={10}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.8 + node.layer * 0.3 + i * 0.08,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Layer labels */}
        <text
          x={layers[0][0].x}
          y={VIEW_H - 16}
          textAnchor="middle"
          fill="var(--color-text-muted)"
          fontSize="10"
          fontFamily="monospace"
        >
          Input
        </text>
        <text
          x={layers[1][0].x}
          y={VIEW_H - 16}
          textAnchor="middle"
          fill="var(--color-text-muted)"
          fontSize="10"
          fontFamily="monospace"
        >
          Hidden
        </text>
        <text
          x={layers[2][0].x}
          y={VIEW_H - 16}
          textAnchor="middle"
          fill="var(--color-text-muted)"
          fontSize="10"
          fontFamily="monospace"
        >
          Output
        </text>
      </svg>
    </div>
  );
}