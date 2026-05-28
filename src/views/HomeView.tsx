import { useAssignmentStore } from '../store/useAssignmentStore';

export default function HomeView() {
  const { setView, resetForm, assignments } = useAssignmentStore();

  const stats = [
    { label: 'Total Assignments', value: assignments.length, icon: '📝' },
    { label: 'Completed Papers', value: assignments.filter(a => a.status === 'completed').length, icon: '✅' },
    { label: 'Subjects Covered', value: new Set(assignments.map(a => a.subject)).size, icon: '📚' },
    { label: 'Total Questions', value: assignments.reduce((sum, a) => sum + (a.generatedPaper?.sections.reduce((s, sec) => s + sec.questions.length, 0) || 0), 0), icon: '❓' },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-28 lg:pb-8">
      {/* Hero */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white mx-0">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wide">AI Assessment Creator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">Welcome back, John Doe! 👋</h1>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xl">
            Create AI-powered question papers, manage assignments, and track student progress — all in one place.
          </p>
          <button
            onClick={() => { resetForm(); setView('create-assignment'); }}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create New Assignment
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-6">
        {/* Stats */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Overview</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-h-[118px]">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => { resetForm(); setView('create-assignment'); }}
            className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Create Assignment</div>
              <div className="text-xs text-gray-500">Generate AI question papers</div>
            </div>
          </button>

          <button
            onClick={() => setView('assignments')}
            className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">View Assignments</div>
              <div className="text-xs text-gray-500">{assignments.length} assignments created</div>
            </div>
          </button>

          <button
            onClick={() => setView('ai-toolkit')}
            className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">AI Toolkit</div>
              <div className="text-xs text-gray-500">Advanced AI features</div>
            </div>
          </button>
        </div>

        {/* Recent Assignments */}
        {assignments.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Assignments</h2>
              <button
                onClick={() => setView('assignments')}
                className="text-sm text-orange-500 font-medium hover:text-orange-600 transition-colors"
              >
                View all →
              </button>
            </div>
            <div className="space-y-3">
              {assignments.slice(0, 3).map((a) => (
                <div key={a.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{a.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Due: {a.dueDate}</div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    a.status === 'completed' ? 'bg-green-100 text-green-700' :
                    a.status === 'generating' ? 'bg-orange-100 text-orange-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
