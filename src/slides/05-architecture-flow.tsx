import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { staggerContainer, fadeUp } from '../lib/animations';
import { 
  Database, User, FileText, Sparkles, 
  Layers, Search, Code, SplitSquareHorizontal,
  ArrowRight, ArrowDown, ArrowUp
} from 'lucide-react';

const InlineArrow = () => (
  <div style={{ color: 'var(--border-strong)', alignSelf: 'center', flexShrink: 0 }}>
    <ArrowRight size={20} strokeWidth={2.5} />
  </div>
);

const Node = ({ num, icon: Icon, imgSrc, title, desc, color }: any) => (
  <div style={{
    flex: 1, minHeight: 140,
    background: 'var(--bg-card)', border: `1px solid var(--border)`,
    borderTop: `4px solid ${color}`, borderRadius: 12,
    padding: '16px 20px', display: 'flex', flexDirection: 'column',
    boxShadow: `0 4px 16px color-mix(in srgb, ${color} 5%, transparent)`, position: 'relative'
  }}>
    {num && (
      <div style={{
        position: 'absolute', top: -12, left: -12,
        background: color, color: 'white',
        width: 24, height: 24, borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 800, fontFamily: 'var(--font-mono)', zIndex: 20,
      }}>
        {num}
      </div>
    )}
    <div style={{ color, background: `color-mix(in srgb, ${color} 10%, transparent)`, width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
      {imgSrc ? (
        <img src={imgSrc} alt={title} style={{ width: 22, height: 22, objectFit: 'contain' }} />
      ) : (
        <Icon size={20} strokeWidth={2.5} />
      )}
    </div>
    <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--text-primary)', lineHeight: 1.2 }}>{title}</div>
    <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 6, lineHeight: 1.4 }}>{desc}</div>
  </div>
);

export default function Slide05ArchitectureFlow() {
  return (
    <SlideLayout>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-surface)' }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'absolute', top: 32, left: 64 }}
      >
        <span className="tag">05 — Blueprint</span>
        <h2 style={{ fontWeight: 800, fontSize: 'var(--heading-size)', marginTop: 6, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Two-Phase Architecture Flow
        </h2>
      </motion.div>

      {/* Main Container - Vertical Flex for Top-Middle-Bottom sections */}
      <motion.div
        variants={staggerContainer(0.08, 0.15)}
        initial="hidden" animate="show"
        style={{
          position: 'absolute', top: 110, left: 64, right: 64, bottom: 40,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24,
        }}
      >
        {/* =========================================
            TOP: PHASE 1 (OFFLINE)
        ========================================= */}
        <motion.div variants={fadeUp} style={{
          background: 'rgba(5, 150, 105, 0.03)', border: '1px dashed rgba(5, 150, 105, 0.2)',
          borderRadius: 12, padding: 20, position: 'relative'
        }}>
          <div style={{ 
            fontSize: 12, fontWeight: 800, color: 'var(--green)', letterSpacing: '0.06em', 
            marginBottom: 16, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 
          }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--green)' }} />
            Phase 1: Data Input & Processing (Offline)
          </div>
          
          <div style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
            <Node num="1" icon={FileText} title="Raw Documents" desc="PDF, Word, Excel, Policy Manuals from JRG." color="var(--text-secondary)" />
            <InlineArrow />
            <Node num="2" icon={Code} title="Custom Parsers" desc="Python scripts preserving document lineage & tables." color="var(--green)" />
            <InlineArrow />
            <Node num="3" icon={SplitSquareHorizontal} title="Text Splitter" desc="Chunks text into 100-200 word blocks with overlap." color="var(--green)" />
            <InlineArrow />
            <Node num="4" icon={Layers} title="Hybrid Embedding" desc="Vectorizes via Dense (bkai) & Sparse (BM25)." color="var(--green)" />
            
            {/* Arrow pointing down to DB */}
            <div style={{ position: 'absolute', right: '12%', bottom: -30, color: 'var(--border-strong)', zIndex: 30 }}>
              <ArrowDown size={28} strokeWidth={2} />
            </div>
          </div>
        </motion.div>

        {/* =========================================
            MIDDLE: VECTOR DB
        ========================================= */}
        <motion.div variants={fadeUp} style={{
          alignSelf: 'center', background: 'var(--bg-card)', 
          border: '2px solid var(--accent)', borderRadius: 16,
          padding: '24px 36px', display: 'flex', alignItems: 'center', gap: 20,
          boxShadow: '0 12px 32px rgba(227, 24, 55, 0.12)', zIndex: 10,
        }}>
          <div style={{ width: 44, height: 44, background: 'color-mix(in srgb, var(--accent) 10%, transparent)', borderRadius: 12, padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Replace this img with your Qdrant logo file uploaded to the public/ folder */}
            <img src="/qdrant-logo.png" alt="Qdrant" style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)' }}>Qdrant Cloud</div>
            <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginTop: 4 }}>High-Speed Vector Database</div>
          </div>
        </motion.div>

        {/* =========================================
            BOTTOM: PHASE 2 (ONLINE)
        ========================================= */}
        <motion.div variants={fadeUp} style={{
          background: 'rgba(217, 119, 6, 0.03)', border: '1px dashed rgba(217, 119, 6, 0.2)',
          borderRadius: 12, padding: 20, position: 'relative'
        }}>
          <div style={{ 
            fontSize: 12, fontWeight: 800, color: 'var(--yellow)', letterSpacing: '0.06em', 
            marginBottom: 16, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 
          }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--yellow)' }} />
            Phase 2: RAG Query Processing (Online)
          </div>

          <div style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
            <Node num="1" icon={User} title="User Query" desc="Sent via React Frontend to FastAPI Backend." color="var(--yellow)" />
            <InlineArrow />
            <Node num="2" imgSrc="/gemini-logo.png" icon={Sparkles} title="Transform Query" desc="Resolves history pronouns & translates language (Gemini)." color="var(--yellow)" />
            <InlineArrow />
            
            {/* Retriever node points up to DB */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', left: '50%', top: -30, transform: 'translateX(-50%)', color: 'var(--border-strong)', zIndex: 30, display: 'flex', gap: 8 }}>
                <ArrowUp size={24} strokeWidth={2} />
              </div>
              <Node num="3" icon={Search} title="Retriever" desc="Hybrid Qdrant Search pulls Top 10 candidate chunks." color="var(--yellow)" />
            </div>


            <InlineArrow />
            <Node num="4" icon={Layers} title="PhoRanker" desc="Cross-Encoder rigorously re-scores & keeps Top 6." color="var(--yellow)" />
            <InlineArrow />
            <Node num="5" imgSrc="/gemini-logo.png" icon={Sparkles} title="LLM Generator" desc="Streams strictly-grounded final answer (Gemini 2.5)." color="var(--accent)" />
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
}
