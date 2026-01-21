
import React, { useState } from 'react';
import { getCurriculumAdvise } from '../geminiService';

interface AssistantModalProps {
  onClose: () => void;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ onClose }) => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    
    setLoading(true);
    const data = await getCurriculumAdvise(topic);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#0F141E] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center">
              <i className="fas fa-wand-sparkles text-gold-100"></i>
            </div>
            <div>
              <h3 className="font-bold text-xl">Smart Vault Assistant</h3>
              <p className="text-xs text-muted">Curriculum Framework Suggestor</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-muted">
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        <div className="p-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-muted leading-relaxed">
                Enter a lesson topic or classroom challenge, and I'll suggest a system framework from the Vault to handle it.
              </p>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gold-500 ml-1">Learning Topic</label>
                <input 
                  autoFocus
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Ancient Rome, Conflict Resolution, Fractions..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder:text-muted/40 focus:border-gold-500/50 outline-none transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-radial-gold border border-gold-100/50 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                {loading ? (
                  <><i className="fas fa-circle-notch fa-spin"></i> Analyzing Vault...</>
                ) : (
                  <>Generate System Suggestion</>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="p-6 bg-white/5 border border-gold-500/20 rounded-2xl">
                <h4 className="text-gold-100 font-bold text-sm uppercase tracking-widest mb-2">Recommended Framework</h4>
                <div className="text-2xl font-black mb-4">{result.frameworkName}</div>
                <div className="space-y-3">
                  {result.steps.map((step: string, i: number) => (
                    <div key={i} className="flex gap-3 text-sm text-muted">
                      <span className="text-gold-500 font-bold">{i + 1}.</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/30 rounded-2xl border border-white/5">
                <div className="text-xs">
                  <span className="text-muted mr-2">Category:</span>
                  <span className="font-bold text-white uppercase">{result.suggestedVaultCategory}</span>
                </div>
                <button 
                  onClick={() => setResult(null)}
                  className="text-xs font-bold text-gold-100 hover:underline"
                >
                  Try another topic
                </button>
              </div>

              <a 
                href="#pricing"
                onClick={onClose}
                className="block text-center w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-gold-500/10 transition-all"
              >
                Unlock this framework in the Vault
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssistantModal;
