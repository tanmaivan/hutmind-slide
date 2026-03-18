import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { slideInLeft, slideInRight } from '../lib/animations';

const scenarios = [
  {
    num: '01',
    title: 'Demo 1: Context Memory',
    color: 'var(--accent)',
    exchanges: [
      { role: 'user', msg: 'Who is the Head of Data at Pizza Hut?' },
      { role: 'bot', msg: 'The Head of Data is Quang Trần, based in HCM City office.' },
      { role: 'user', msg: 'What is his email?' },
      { role: 'bot', msg: 'Quang Trần\'s email is quang.tran@pizzahut.com.vn' },
    ],
    note: 'Query Transformer resolved "his" → "Quang Trần" from history.',
  },
  {
    num: '02',
    title: 'Demo 2: Cross-language search',
    color: 'var(--green)',
    exchanges: [
      { role: 'user', msg: 'What is the WFH policy?' },
      { role: 'system', msg: 'Query Transformer: translates "WFH policy?" → Vietnamese' },
      { role: 'system', msg: 'Hybrid Search: Dense catches "remote" semantics, BM25 exact-matches "WFH"' },
      { role: 'bot', msg: 'Employees may work from home up to 2 days/week. (Per Handbook §3.4)' },
    ],
    note: 'Answer generated in English — matching the input language.',
  },
];

export default function Slide09Demo() {
  return (
    <SlideLayout>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-surface)' }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'absolute', top: 40, left: 64 }}
      >
        <span className="tag">08 — Live Demo Showcase</span>
        <h2 style={{ fontWeight: 800, fontSize: 'var(--heading-size)', marginTop: 6, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          HutMind in Action
        </h2>
      </motion.div>

      <div style={{
        position: 'absolute', top: 148, left: 64, right: 64, bottom: 44,
        display: 'flex', gap: 24,
      }}>
        {scenarios.map((sc, si) => (
          <motion.div
            key={sc.num}
            variants={si === 0 ? slideInLeft : slideInRight}
            initial="hidden" animate="show"
            style={{
              flex: 1, border: '1px solid var(--border)', borderTop: `3px solid ${sc.color}`,
              padding: '24px 26px', display: 'flex', flexDirection: 'column',
              background: 'var(--bg-card)', boxShadow: '0 8px 16px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 18 }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                fontWeight: 800, color: 'var(--text-muted)', opacity: 0.4,
              }}>{sc.num}</span>
              <div className="tag" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{sc.title}</div>
            </div>

            {/* Chat bubbles */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {sc.exchanges.map((ex, i) => (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: ex.role === 'user' ? 'row-reverse' : 'row',
                  gap: 8, alignItems: 'flex-start',
                }}>
                  <div style={{
                    maxWidth: '82%', padding: '10px 14px', borderRadius: 8,
                    background: ex.role === 'user'
                      ? 'var(--accent)'
                      : ex.role === 'system'
                        ? 'var(--bg-surface)'
                        : 'white',
                    border: '1px solid',
                    borderColor: ex.role === 'user'
                      ? 'var(--accent)'
                      : ex.role === 'system'
                        ? 'var(--border)'
                        : 'var(--border-strong)',
                    fontSize: 'var(--small-size)',
                    color: ex.role === 'user'
                      ? 'white'
                      : ex.role === 'system'
                        ? 'var(--text-muted)'
                        : 'var(--text-primary)',
                    lineHeight: 1.5,
                    fontFamily: ex.role === 'system' ? 'var(--font-mono)' : 'var(--font-display)',
                    fontStyle: ex.role === 'system' ? 'italic' : 'normal',
                    boxShadow: ex.role === 'user' || ex.role === 'bot' ? '0 2px 4px rgba(0,0,0,0.04)' : 'none',
                  }}>
                    {ex.msg}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)', fontSize: 'var(--small-size)', color: 'var(--text-secondary)',
            }}>
              ✓ {sc.note}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
