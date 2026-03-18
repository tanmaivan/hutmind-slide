import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { staggerContainer, fadeUp } from '../lib/animations';

const thanks = [
  'Gemini 2.5 Flash', 'Qdrant Cloud',
  'PhoRanker', 'bkai-bi-encoder',
  'BM25', 'FastAPI',
  'React / Vercel',
];

export default function Slide10QnA() {
  return (
    <SlideLayout>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse at 60% 40%, rgba(227, 24, 55, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(5, 150, 105, 0.03) 0%, transparent 50%),
          var(--bg-surface)
        `,
      }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden" animate="show"
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'center',
          padding: '0 64px',
        }}
      >
        <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
          <span className="tag">09 — Q&amp;A</span>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 style={{
            fontWeight: 800, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.0,
            color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.02em',
          }}>Thank You.</h1>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 style={{
            fontWeight: 800, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.0,
            color: 'var(--accent)', marginBottom: 36, letterSpacing: '-0.02em',
          }}>Any Questions?</h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 'var(--body-size)', color: 'var(--text-secondary)',
            maxWidth: 580, lineHeight: 1.65, marginBottom: 44,
          }}
        >
          Built with care for Pizza Hut Vietnam & Jardine Restaurant Group —
          a modular architecture designed to be accurate, secure, and future-proof.
        </motion.p>

        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
        >
          {thanks.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)', fontWeight: 500,
                color: 'var(--text-secondary)', border: '1px solid var(--border-strong)',
                background: 'var(--bg-card)', padding: '6px 14px', borderRadius: 6,
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Subtle ghost decoration */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 320, lineHeight: 1,
          color: 'rgba(227, 24, 55, 0.03)', userSelect: 'none', pointerEvents: 'none',
        }}
      >
        ?
      </motion.div>
    </SlideLayout>
  );
}
