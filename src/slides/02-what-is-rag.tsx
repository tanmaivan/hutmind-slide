import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { staggerContainer, fadeUp } from '../lib/animations';

const bullets = [
  {
    icon: '📚',
    label: 'The Library',
    text: 'Internal documents live in a dedicated Vector Database — not baked into the AI model itself.',
  },
  {
    icon: '🔍',
    label: 'Retrieval',
    text: 'When a question arrives, the system pinpoints the most relevant document passages in milliseconds.',
  },
  {
    icon: '✍️',
    label: 'Generation',
    text: 'Only those passages travel to the LLM as context — not the entire library at once.',
  },
];

export default function Slide02WhatIsRag() {
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
        <motion.div variants={fadeUp} style={{ marginBottom: 14 }}>
          <span className="tag">01 — What is RAG?</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          style={{ fontWeight: 800, fontSize: 'var(--heading-size)', lineHeight: 1.1, marginBottom: 14, letterSpacing: '-0.02em' }}
        >
          The "Open-book Exam" for AI
        </motion.h2>

        <motion.div
          variants={fadeUp}
          style={{
            borderLeft: '3px solid var(--accent)', paddingLeft: 20,
            marginBottom: 40, maxWidth: 700,
          }}
        >
          <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Instead of making an LLM <em>memorize</em> all company docs,
            we give it a <strong style={{ color: 'var(--text-primary)' }}>searchable library</strong> to look things up on demand —
            exactly like an open-book exam vs. rote memorization.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0)}
          style={{ display: 'flex', gap: 24 }}
        >
          {bullets.map((b) => (
            <motion.div
              key={b.label}
              variants={fadeUp}
              style={{
                flex: 1, border: '1px solid var(--border)',
                padding: '24px 26px', background: 'var(--bg-card)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{b.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 'var(--body-size)', color: 'var(--text-primary)', marginBottom: 8 }}>
                {b.label}
              </div>
              <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {b.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{
            marginTop: 28, fontFamily: 'var(--font-mono)',
            fontSize: 'var(--small-size)', color: 'var(--text-muted)',
          }}
        >
          RAG = <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Retrieval</span>-Augmented{' '}
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Generation</span>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
