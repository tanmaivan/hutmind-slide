import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { slideInLeft, slideInRight } from '../lib/animations';

export default function Slide08SystemPrompts() {
  return (
    <SlideLayout>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 0%, rgba(227, 24, 55, 0.04) 0%, transparent 60%), var(--bg-surface)`,
      }} />
      <div className="dot-grid" />
      <div className="accent-bar-left" />

      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'absolute', top: 32, left: 64, right: 64 }}
      >
        <span className="tag">06 — System Prompts</span>
        <h2 style={{ fontWeight: 800, fontSize: 'var(--heading-size)', marginTop: 4, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          The Brain Behind the System
        </h2>
      </motion.div>

      <div style={{
        position: 'absolute', top: 124, left: 64, right: 64, bottom: 44,
        display: 'flex', gap: 24,
      }}>
        {/* HutMind prompt */}
        <motion.div
          variants={slideInLeft}
          initial="hidden" animate="show"
          style={{
            flex: 1, border: '1px solid var(--border)', borderTop: '3px solid var(--accent)',
            padding: '24px 26px', background: 'var(--bg-card)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.03)',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <div className="tag" style={{ marginBottom: 10, color: 'var(--text-primary)', fontWeight: 600 }}>① HutMind Persona (Generator)</div>
          <p style={{ fontSize: 'var(--small-size)', color: 'var(--text-secondary)', marginBottom: 16 }}>
            Defines identity, response rules, and critical multilingual behavior.
          </p>
          <div className="code-block" style={{ whiteSpace: 'pre-wrap', fontSize: 'clamp(11px, 1.1vw, 13px)', lineHeight: 1.6, flex: 1, overflowY: 'auto' }}>
            <span style={{ color: 'var(--yellow)' }}>self.prompt_template</span> = <span className="str">"""</span>{'\n'}
            <span className="str">You are "HutMind", a professional AI assistant for Jardine Restaurant Group...</span>{'\n\n'}
            
            <span style={{ fontWeight: 700 }}>Answering rules:</span>{'\n'}
            - <span className="str">IF CONTEXT HAS INFO:</span> Answer accurately based on context.{'\n'}
            - <span className="str">IF CASUAL GREETING:</span> Answer amicably without using context.{'\n'}
            - <span className="str">IF NO INFO IN CONTEXT:</span> State frankly, "Sorry, I currently do not have information..."{'\n'}
            - <span className="kw">MULTILINGUAL (CRITICAL):</span> Automatically detect language in "User query". ALWAYS answer in that exact language.{'\n\n'}
            
            <span style={{ fontWeight: 700 }}>Context retrieved from the system:</span>{'\n'}
            <span className="fn">{'{context}'}</span>{'\n\n'}

            <span style={{ fontWeight: 700 }}>Recent chat history:</span>{'\n'}
            <span className="fn">{'{history}'}</span>{'\n\n'}

            <span style={{ fontWeight: 700 }}>User query:</span>{'\n'}
            <span className="fn">{'{query}'}</span>{'\n\n'}

            <span className="kw">CRITICAL INSTRUCTION:</span>{'\n'}
            <span className="str">The Context may be in Vietnamese or English. However, you MUST detect the language in the "User query" and answer in THAT EXACT LANGUAGE.</span>{'\n'}
            <span className="str">"""</span>
          </div>
        </motion.div>

        {/* Query Transformer prompt */}
        <motion.div
          variants={slideInRight}
          initial="hidden" animate="show"
          style={{
            flex: 1, border: '1px solid var(--border)', borderTop: '3px solid var(--yellow)',
            padding: '24px 26px', background: 'var(--bg-card)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.03)',
            display: 'flex', flexDirection: 'column',
          }}
        >
          <div className="tag" style={{ marginBottom: 10, color: 'var(--text-primary)', fontWeight: 600 }}>② Query Transformer (Pre-processor)</div>
          <p style={{ fontSize: 'var(--small-size)', color: 'var(--text-secondary)', marginBottom: 16 }}>
            Standardizes inputs, resolves context, and translates foreign queries to Vietnamese.
          </p>
          <div className="code-block" style={{ whiteSpace: 'pre-wrap', fontSize: 'clamp(11px, 1.1vw, 13px)', lineHeight: 1.6, flex: 1, overflowY: 'auto' }}>
            <span style={{ color: 'var(--yellow)' }}>self.transform_prompt</span> = ChatPromptTemplate.from_template(<span className="str">"""</span>{'\n'}
            <span className="str">You are an AI specialized in optimizing queries for database searching.</span>{'\n\n'}

            <span style={{ fontWeight: 700 }}>MANDATORY Rules:</span>{'\n'}
            - <span className="kw">CORRECT SPELLING:</span> ("ko" -&gt; "không", "wfh" -&gt; "làm việc từ xa").{'\n'}
            - <span className="kw">HANDLE PRONOUNS:</span> IF query uses pronouns (he, it), search Chat history to replace with specific nouns.{'\n'}
            {'  '}<span className="cmt">(History: "Leader is Quang" -&gt; Query: "His email?" =&gt; "Quang's email?")</span>{'\n'}
            - <span className="kw">SPLIT SENTENCES:</span> Split distinct ideas using a "|" symbol.{'\n'}
            {'  '}<span className="cmt">("Leave policy and WFH" -&gt; "Leave policy?|WFH policy?")</span>{'\n'}
            - <span className="kw">SEARCH LANGUAGE OPTIMIZATION:</span> If query is NOT in Vietnamese, TRANSLATE IT INTO VIETNAMESE for database searching.{'\n\n'}

            <span className="str">Only return the result in format: Result: &lt;query 1&gt;|&lt;query 2&gt;</span>{'\n\n'}

            <span style={{ fontWeight: 700 }}>Recent chat history:</span>{'\n'}
            <span className="fn">{'{history}'}</span>{'\n\n'}

            <span style={{ fontWeight: 700 }}>Original user query:</span>{'\n'}
            <span className="fn">{'{query}'}</span>{'\n'}
            <span className="str">"""</span>)
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
