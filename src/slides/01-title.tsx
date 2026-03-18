import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { staggerContainer, fadeUp, slideInLeft } from '../lib/animations';

export default function Slide01Title() {
  return (
    <SlideLayout>
      {/* Light elegant bg with a very subtle radial gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 70% 30%, rgba(227, 24, 55, 0.04) 0%, transparent 60%), var(--bg-surface)`,
      }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      {/* Top label */}
      <motion.div
        style={{ position: 'absolute', top: 52, left: 64 }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="tag">Title: Advanced RAG System for Pizza Hut</span>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={staggerContainer(0.12, 0.25)}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute', top: '50%', left: 64, transform: 'translateY(-50%)', maxWidth: 660,
        }}
      >
        <motion.div variants={fadeUp}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)',
            color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.06em', marginBottom: 20,
          }}>
            Technical Deep-Dive
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{
            fontWeight: 800, fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.07,
            color: 'var(--text-primary)', marginBottom: 6, letterSpacing: '-0.02em',
          }}
        >
          Advanced RAG
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          style={{
            fontWeight: 800, fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.07,
            color: 'var(--accent)', marginBottom: 32, letterSpacing: '-0.02em',
          }}
        >
          System
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 'var(--subheading-size)', color: 'var(--text-secondary)',
            fontWeight: 400, lineHeight: 1.6, maxWidth: 520,
          }}
        >
          How we built <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>HutMind</strong> —
          the internal AI assistant for Pizza Hut Vietnam —
          using Retrieval-Augmented Generation.
        </motion.p>
      </motion.div>

      {/* Right — tech stack card */}
      <motion.div
        variants={slideInLeft}
        initial="hidden" animate="show"
        style={{
          position: 'absolute', right: 64, top: '50%', transform: 'translateY(-50%)',
          width: 320, border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)',
          padding: '26px 26px', background: 'var(--bg-card)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        }}
      >
        <div className="tag" style={{ marginBottom: 18, color: 'var(--text-secondary)' }}>Tech Stack</div>
        {[
          ['LLM', 'Gemini 2.5 Flash'],
          ['Vector DB', 'Qdrant Cloud'],
          ['Reranker', 'PhoRanker'],
          ['Embeddings', 'bkai-bi-encoder + BM25'],
          ['Backend', 'FastAPI + Streaming'],
          ['Frontend', 'React / Vercel'],
        ].map(([label, value]) => (
          <div key={label} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            borderBottom: '1px solid var(--border)', paddingBottom: 9, marginBottom: 9,
          }}>
            <span style={{ fontSize: 'var(--small-size)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{label}</span>
            <span style={{ fontSize: 'var(--small-size)', color: 'var(--text-primary)', fontWeight: 600 }}>{value}</span>
          </div>
        ))}
      </motion.div>

      <div style={{
        position: 'absolute', bottom: 28, left: 64,
        fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)', color: 'var(--text-muted)',
      }}>
        Tan | AI Architect<br/>
        Jardine Restaurant Group · Pizza Hut Vietnam
      </div>
    </SlideLayout>
  );
}
