import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { staggerContainer, fadeUp } from '../lib/animations';

const steps = [
  {
    num: '01',
    title: 'Chunking',
    color: 'var(--accent)',
    desc: 'Long documents are sliced into small, focused passages. This prevents the AI from drowning in 50 pages of irrelevant text.',
    examples: [
      { label: 'Source', text: '50-page HR Employee Handbook' },
      { label: 'Chunk A', text: '§3.1: Annual leave is 15 days/year.' },
      { label: 'Chunk B', text: '§3.2: Sick leave requires a doctor note.' },
    ],
  },
  {
    num: '02',
    title: 'Vectors & Database',
    color: 'var(--yellow)',
    desc: 'An AI embedding model converts text into arrays of numbers (vectors) based on their underlying meaning.',
    examples: [
      { label: 'Text', text: '"Annual leave"' },
      { label: 'Vector', text: '[ 0.82, -0.11, 0.45, ... ] (768 dims)' },
      { label: 'Magic', text: '"Nghỉ phép" will have a nearly identical vector because the meaning is the same.' },
    ],
  },
  {
    num: '03',
    title: 'Retrieve & Generate',
    color: 'var(--green)',
    desc: 'When a user asks a question, it gets vectorized. The DB finds the closest matching chunk vectors.',
    examples: [
      { label: 'Query', text: '"How many days off do I get?"' },
      { label: 'Match', text: 'Chunk A (Similarity Score: 0.94)' },
      { label: 'Output', text: 'Prompt: "Answer using only Chunk A." → Bot answers "15 days/year."' },
    ],
  },
];

export default function Slide04BaselineRag() {
  return (
    <SlideLayout>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-surface)' }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '0 64px',
        }}
      >
        <motion.div variants={fadeUp} style={{ marginBottom: 10 }}>
          <span className="tag">03 — Baseline RAG</span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          style={{ fontWeight: 800, fontSize: 'var(--heading-size)', marginBottom: 20, lineHeight: 1.1, letterSpacing: '-0.02em' }}
        >
          The 3 core stages
        </motion.h2>

        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
          {steps.map((s, i) => (
            <motion.div key={s.num} variants={fadeUp} style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
              <div style={{
                flex: 1, border: `1px solid var(--border)`, borderTop: `3px solid ${s.color}`,
                padding: '24px 22px', position: 'relative', background: 'var(--bg-card)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)', zIndex: 1,
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.2rem,2.5vw,2rem)',
                  fontWeight: 800, color: 'var(--text-muted)', opacity: 0.15,
                  position: 'absolute', top: 14, right: 18,
                }}>
                  {s.num}
                </div>
                <div style={{ fontWeight: 700, fontSize: 'var(--subheading-size)', marginBottom: 10, color: 'var(--text-primary)' }}>
                  {s.title}
                </div>
                <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>
                  {s.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {s.examples.map((ex, exIdx) => (
                    <div key={exIdx} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)', color: 'var(--text-secondary)',
                      borderLeft: `2px solid ${s.color}`, paddingLeft: 10, background: 'var(--bg-surface)',
                      padding: '6px 8px', borderRadius: '0 4px 4px 0', borderLeftWidth: 3,
                    }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{ex.label}:</span> {ex.text}
                    </div>
                  ))}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  width: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  position: 'relative', zIndex: 0,
                }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: 18 }}>→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          style={{ marginTop: 24, borderLeft: '3px solid var(--accent)', paddingLeft: 16 }}
        >
          <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Limitation:</span>{' '}
            Baseline RAG can retrieve wrong documents or hallucinate when passages look too similar.
            That's what motivated the upgrade to <strong style={{ color: 'var(--text-primary)' }}>Advanced RAG</strong>.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
