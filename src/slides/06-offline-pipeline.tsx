import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { staggerContainer, fadeUp, slideInLeft } from '../lib/animations';

export default function Slide05OfflinePipeline() {
  return (
    <SlideLayout>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-surface)' }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{ position: 'absolute', top: 42, left: 64 }}
      >
        <span className="tag">04 — Advanced RAG · Stage 1</span>
        <h2 style={{ fontWeight: 800, fontSize: 'var(--heading-size)', marginTop: 8, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Offline Data Pipeline
          <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: 'var(--body-size)', display: 'block', marginTop: 4 }}>
            Building the AI's "brain" — once, before any user query arrives
          </span>
        </h2>
      </motion.div>

      <div style={{
        position: 'absolute', top: 170, left: 64, right: 64, bottom: 40,
        display: 'flex', gap: 24,
      }}>
        {/* Left panel */}
        <motion.div
          variants={staggerContainer(0.12, 0.25)}
          initial="hidden" animate="show"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}
        >
          {/* Custom Parsers */}
          <motion.div variants={fadeUp} style={{
            border: '1px solid var(--border)', borderTop: '3px solid var(--accent)',
            padding: '24px 26px', background: 'var(--bg-card)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
          }}>
            <div className="tag" style={{ marginBottom: 10, color: 'var(--text-primary)', fontWeight: 600 }}>① Custom Python parsers</div>
            <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Off-the-shelf PDF readers break tables and lose headings.
              Custom scripts preserve <strong style={{ color: 'var(--text-primary)' }}>document hierarchy</strong> (Chapter → Section) and Markdown table structure.
            </p>
            <div className="code-block" style={{ marginTop: 14 }}>
              <span className="cmt">// Every chunk carries its origin metadata</span>{'\n'}
              {'{'} <span className="str">"content"</span>: <span className="str">"Zalo is banned..."</span>,{'\n'}
              {'  '}<span className="str">"metadata"</span>: {'{'} <span className="str">"hierarchy"</span>: <span className="str">"§1.2 SW Policy"</span>, <span className="str">"page"</span>: <span className="kw">8</span> {'}'} {'}'}
            </div>
          </motion.div>

          {/* Chunk Overlap */}
          <motion.div variants={fadeUp} style={{
            border: '1px solid var(--border)', borderTop: '3px solid var(--yellow)',
            padding: '24px 26px', background: 'var(--bg-card)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
          }}>
            <div className="tag" style={{ marginBottom: 10, color: 'var(--text-primary)', fontWeight: 600 }}>② Chunk overlap</div>
            <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              A sliding window re-uses the tail of each chunk in the next —
              preventing <strong style={{ color: 'var(--text-primary)' }}>context loss at cut boundaries</strong>.
            </p>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { label: 'Chunk 1', text: '"...Head of Data is Quang Trần. He..."', c: 'var(--yellow)' },
                { label: 'Chunk 2', text: '"...is Quang Trần. He manages the pipeline..."', c: 'var(--green)' },
              ].map(c => (
                <div key={c.label} style={{
                  borderLeft: `3px solid ${c.c}`, paddingLeft: 12,
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)', color: 'var(--text-secondary)',
                }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{c.label}: </span>{c.text}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Hybrid Embedding */}
        <motion.div
          variants={slideInLeft}
          initial="hidden" animate="show"
          style={{
            flex: 1, border: '1px solid var(--border)', borderTop: '3px solid var(--green)',
            padding: '24px 28px', background: 'var(--bg-card)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div className="tag" style={{ marginBottom: 12, color: 'var(--text-primary)', fontWeight: 600 }}>③ Hybrid embedding</div>
          <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
            Running two complementary models in parallel — each covers the other's blind spots.
          </p>

          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 'var(--body-size)' }}>Dense vector</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)', color: 'var(--text-muted)' }}>bkai-bi-encoder</span>
            </div>
            <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: 10 }}>
              768-dimensional space. Catches <strong style={{ color: 'var(--text-primary)' }}>semantic meaning</strong>.
              "Working from home" finds docs about "WFH" or "Remote".
            </p>
            <div className="code-block" style={{ padding: '12px 16px' }}>
              V<sub>dense</sub> = [0.12, −0.55, 0.89, …] <span className="cmt">// rich meaning</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 'var(--body-size)' }}>Sparse vector</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)', color: 'var(--text-muted)' }}>BM25</span>
            </div>
            <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: 10 }}>
              Weights rare, important terms only. <strong style={{ color: 'var(--text-primary)' }}>Exact keyword precision</strong> — great for employee IDs, names, codes.
            </p>
            <div className="code-block" style={{ padding: '12px 16px' }}>
              V<sub>sparse</sub> = [0, 0, 0, 2.5, 0, 1.1, …] <span className="cmt">// like Ctrl+F</span>
            </div>
          </div>

          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: 'var(--small-size)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              → Pushed to <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Qdrant Cloud</span>
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
