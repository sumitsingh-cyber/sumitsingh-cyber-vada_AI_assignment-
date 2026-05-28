import { useAssignmentStore } from '../store/useAssignmentStore';

const tools = [
  {
    name: 'Question Generator',
    description: 'Generate custom questions from any topic or uploaded document using AI.',
    icon: '✨',
    color: 'from-orange-400 to-red-400',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    name: 'Rubric Builder',
    description: 'Create detailed marking rubrics and grading criteria automatically.',
    icon: '📊',
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    name: 'Answer Key Generator',
    description: 'Auto-generate comprehensive answer keys with explanations.',
    icon: '🔑',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    name: 'Difficulty Analyzer',
    description: 'Analyze and balance question difficulty across your paper.',
    icon: '📈',
    color: 'from-purple-400 to-violet-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    name: 'Bloom\'s Taxonomy Mapper',
    description: 'Map questions to Bloom\'s Taxonomy levels for comprehensive assessment.',
    icon: '🧠',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  {
    name: 'PDF Import & Parse',
    description: 'Import existing question papers and reuse content intelligently.',
    icon: '📄',
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
];

export default function AIToolkitView() {
  const { setView, resetForm } = useAssignmentStore();

  return (
    <div className="flex-1 overflow-y-auto pb-28 lg:pb-8">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-3 h-3 rounded-full bg-purple-500 shadow-sm shadow-purple-300"></div>
          <h1 className="text-xl font-bold text-gray-900">AI Teacher's Toolkit</h1>
        </div>
        <p className="text-sm text-gray-500 ml-5">Powerful AI tools to supercharge your teaching workflow.</p>
      </div>

      <div className="px-4 sm:px-6 py-6">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span className="text-orange-400 text-sm font-semibold">Powered by VedaAI</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Create Your First AI Assessment</h2>
          <p className="text-gray-300 text-sm mb-4">Generate perfectly structured question papers in seconds using our advanced AI engine.</p>
          <button
            onClick={() => { resetForm(); setView('create-assignment'); }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all shadow-lg text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create Assignment Now
          </button>
        </div>

        {/* Tools Grid */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Available Tools</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`${tool.bg} border ${tool.border} rounded-2xl p-5 hover:shadow-md transition-shadow cursor-pointer group`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-xl shadow-sm flex-shrink-0`}>
                  {tool.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-gray-800">{tool.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
          <p className="text-sm text-amber-800 font-medium">🚀 More tools coming soon — Plagiarism Checker, Auto-Grading, and Student Analytics!</p>
        </div>
      </div>
    </div>
  );
}
