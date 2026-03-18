import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { slideInLeft, slideInRight } from '../lib/animations';

export default function Slide03BusinessCase() {
  return (
    <SlideLayout>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-surface)' }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'absolute', top: 44, left: 64 }}
      >
        <span className="tag">03 — Why RAG? (The Business Value)</span>
        <h2 style={{ fontWeight: 800, fontSize: 'var(--heading-size)', marginTop: 8, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Fine-Tuning vs. RAG
          <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: 'var(--body-size)', display: 'block', marginTop: 4 }}>
            + How company data stays secure
          </span>
        </h2>
      </motion.div>

      <div style={{
        position: 'absolute', top: 168, left: 64, right: 64, bottom: 40,
        display: 'flex', gap: 20, alignItems: 'stretch',
      }}>
        {/* Fine-tuning */}
        <motion.div
          variants={slideInLeft}
          initial="hidden" animate="show"
          style={{
            flex: 1, border: '1px solid var(--border)', borderTop: '3px solid var(--accent)',
            padding: '26px 28px', background: 'var(--bg-card)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)',
            color: 'var(--accent)', fontWeight: 600, marginBottom: 18,
          }}>✗ Fine-Tuning</div>
          {[
            'Bakes knowledge permanently into model weights',
            'Needs massive GPU hardware — very expensive',
            'Knowledge is frozen. Outdated the moment HR updates a policy.',
            'To fix? Retrain from scratch. Again.',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0, fontWeight: 700 }}>—</span>
              <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{t}</p>
            </div>
          ))}
        </motion.div>

        {/* RAG */}
        <motion.div
          variants={slideInRight}
          initial="hidden" animate="show"
          style={{
            flex: 1, border: '1px solid var(--border)', borderTop: '3px solid var(--green)',
            padding: '26px 28px', background: 'var(--bg-card)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)',
            color: 'var(--green)', fontWeight: 600, marginBottom: 18,
          }}>✓ RAG</div>
          {[
            'Knowledge lives in a separate Vector DB — fully company-controlled',
            'Update or delete any document instantly — no retraining needed',
            'Sends only the most relevant passages to the LLM per query',
            'Fast responses, precise answers, easy to keep current',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', marginTop: 2, flexShrink: 0, fontWeight: 700 }}>✓</span>
              <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{t}</p>
            </div>
          ))}
        </motion.div>

        {/* Security */}
        <motion.div
          variants={slideInRight}
          initial="hidden" animate="show"
          style={{
            width: 260, border: '1px solid var(--border)', borderTop: '3px solid var(--text-secondary)',
            padding: '26px 24px', background: 'var(--bg-card)', flexShrink: 0,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)',
            color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 14,
          }}>🔒 Enterprise Data Security</div>
          <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
            Google & OpenAI enterprise APIs come with strict guarantees:
          </p>
          {[
            'Zero-data retention policy',
            'Never used to train public models',
            'Company owns & controls the Vector DB',
          ].map((t) => (
            <div key={t} style={{ display: 'flex', gap: 8, marginBottom: 10, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--text-muted)', flexShrink: 0, fontSize: 11, marginTop: 4 }}>●</span>
              <p style={{ fontSize: 'var(--small-size)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{t}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  );
}
