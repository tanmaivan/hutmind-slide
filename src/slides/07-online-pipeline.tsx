import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { staggerContainer, fadeUp } from '../lib/animations';
import { Sparkles, Search, Gavel, Zap, ArrowRight } from 'lucide-react';

const stations = [
  {
    id: '01',
    title: 'Query Transformer',
    color: 'var(--yellow)',
    icon: Sparkles,
    desc: 'The "Proxy Brain". Normalizes text, resolves hidden pronouns from chat history, and auto-translates queries into Vietnamese.',
    example: '"His email?" ➔ "Quang Tran\'s email?"',
  },
  {
    id: '02',
    title: 'Hybrid Retriever',
    color: 'var(--text-primary)',
    icon: Search,
    desc: 'Fires both Semantic (Dense) and exact-keyword (BM25) searches simultaneously into the Qdrant database to grab broad candidates.',
    example: 'Returns Top 10 matching paragraphs',
  },
  {
    id: '03',
    title: 'PhoRanker (The Judge)',
    color: 'var(--green)',
    icon: Gavel,
    desc: 'A strict Cross-Encoder model. Rereads every word of the Top 10 candidates deeply to eliminate all hallucinations.',
    example: 'Keeps only the Elite Top 6',
  },
  {
    id: '04',
    title: 'LLM Generator & Stream',
    color: 'var(--accent)',
    icon: Zap,
    desc: 'Assembles the strict rules, Top 6 context, and history, then sends to Gemini 2.5 Flash for answer streaming.',
    example: 'Words appear letter-by-letter instantly',
  },
];

export default function Slide07OnlinePipeline() {
  return (
    <SlideLayout>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-surface)' }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'absolute', top: 40, left: 64, right: 64 }}
      >
        <span className="tag">06 — Advanced RAG · Stage 2</span>
        <h2 style={{ fontWeight: 800, fontSize: 'var(--heading-size)', marginTop: 8, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Real-Time Query Pipeline
          <span style={{
            color: 'var(--text-secondary)', fontWeight: 400,
            fontSize: 'var(--body-size)', display: 'block', marginTop: 4,
          }}>
            From a raw user message to a hallucination-free answer in milliseconds
          </span>
        </h2>
      </motion.div>

      {/* Main visualization area */}
      <motion.div
        variants={staggerContainer(0.12, 0.25)}
        initial="hidden" animate="show"
        style={{
          position: 'absolute', top: 180, left: 64, right: 64, bottom: 44,
          display: 'flex', gap: 24, alignItems: 'stretch',
        }}
      >
        {/* Background connecting line passing through center */}
        <div style={{
          position: 'absolute', top: '38%', left: '8%', right: '8%', height: 4,
          background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.2) 0%, rgba(227, 24, 55, 0.4) 100%)',
          borderRadius: 2, zIndex: 0, border: '1px dashed var(--border-strong)',
        }} />

        {stations.map((s, index) => (
          <motion.div
            key={s.id}
            variants={fadeUp}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10,
            }}
          >
            {/* Upper Card - The logic & icon */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderTop: `4px solid ${s.color}`, borderRadius: 16,
              padding: '24px 20px', display: 'flex', flexDirection: 'column',
              boxShadow: `0 8px 24px color-mix(in srgb, ${s.color} 5%, transparent)`,
              height: 240, position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -14, left: 24,
                background: s.color, color: 'white',
                width: 28, height: 28, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800, fontFamily: 'var(--font-mono)',
                boxShadow: `0 4px 8px color-mix(in srgb, ${s.color} 30%, transparent)`, zIndex: 20,
              }}>
                {index + 1}
              </div>

              <s.icon size={32} color={s.color} strokeWidth={2} style={{ marginBottom: 16 }} />
              
              <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.1 }}>
                {s.title}
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {s.desc}
              </p>
            </div>

            {/* Connecting dot exactly on the line */}
            <div style={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            </div>

            {/* Empty space filler for layout */}
            <div style={{ flex: 1 }} />

            {/* Bottom Card - The examples & results */}
            <div style={{
              background: `color-mix(in srgb, ${s.color} 4%, var(--bg-surface))`,
              border: `1px solid color-mix(in srgb, ${s.color} 15%, transparent)`,
              borderLeft: `3px solid ${s.color}`, borderRadius: 8,
              padding: '16px 16px', display: 'flex', alignItems: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)', marginTop: -20,
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.5,
              }}>
                <span style={{ color: s.color, fontWeight: 700, marginRight: 6 }}>{s.id === '01' ? 'e.g.' : '→'}</span>
                {s.example}
              </div>
            </div>

            {/* Optional arrow between columns */}
            {index < stations.length - 1 && (
              <div style={{
                position: 'absolute', right: -36, top: '38%', transform: 'translateY(-50%)',
                color: 'var(--border-strong)', zIndex: 20,
              }}>
                <ArrowRight size={28} strokeWidth={1.5} />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}
