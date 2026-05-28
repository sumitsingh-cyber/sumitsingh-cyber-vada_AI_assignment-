import { useAssignmentStore, AppView } from '../store/useAssignmentStore';

/* ── Figma logo icon: orange/red gradient square with V mark ── */
function VedaLogoIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sb_logo_grad" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E56820" />
          <stop offset="1" stopColor="#C84B20" />
        </linearGradient>
        <linearGradient id="sb_logo_overlay" x1="15" y1="9" x2="15" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.33" stopColor="white" stopOpacity="0" />
          <stop offset="0.76" stopColor="#0E1513" />
          <stop offset="1" stopColor="#0E1513" />
        </linearGradient>
      </defs>
      {/* Orange rounded square */}
      <rect width="40" height="40" rx="9" fill="url(#sb_logo_grad)" />
      {/* Left V wing */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.44 28.22C22.44 28.22 23.17 30.16 23.84 30.28H15.41C13.71 30.28 12.2 29.31 11.71 27.49L6.8 12.92C6.8 12.92 6.38 11.16 5.71 10.86H14.32C16.02 10.92 17.17 11.53 17.84 13.78L22.44 28.22Z"
        fill="white"
      />
      {/* Overlay fade on left wing */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.44 28.22C22.44 28.22 23.17 30.16 23.84 30.28H15.41C13.71 30.28 12.2 29.31 11.71 27.49L6.8 12.92C6.8 12.92 6.38 11.16 5.71 10.86H14.32C16.02 10.92 17.17 11.53 17.84 13.78L22.44 28.22Z"
        fill="url(#sb_logo_overlay)"
        opacity="0.2"
      />
      {/* Right V wing */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.04 28.22C17.04 28.22 16.31 30.16 15.64 30.28H24.07C25.77 30.28 27.28 29.31 27.77 27.49L32.62 12.92C32.62 12.92 33.04 11.16 33.71 10.86H25.16C23.46 10.86 22.37 11.47 21.71 13.71L17.04 28.22Z"
        fill="white"
      />
    </svg>
  );
}

/* ── Nav icons matching Figma screenshot ── */
function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <rect x="0.5" y="0.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11.5" y="0.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="0.5" y="11.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11.5" y="11.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function IconMyGroups() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function IconAssignments() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
      <path d="M9 2v6h6M9 2l6 6"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="9" y1="17" x2="13" y2="17"/>
    </svg>
  );
}

function IconAIToolkit() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

function IconMyLibrary() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function IconSettings() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );
}

/* ── Create Assignment pill button matching Figma exactly ── */
function CreateAssignmentBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2.5 h-12 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-[0.98] select-none"
      style={{
        background: '#272727',
        boxShadow: '0 0 0 2px #C0350A, inset 0 0 20px rgba(255,255,255,0.08), inset 0 -1px 3px rgba(110,110,110,0.5)',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        position: 'relative',
      }}
    >
      {/* Gradient border achieved via pseudo-like wrapper */}
      <span className="absolute inset-0 rounded-full pointer-events-none" style={{
        background: 'linear-gradient(180deg,#FF7950 0%,#C0350A 100%)',
        zIndex: -1,
        margin: '-2px',
        borderRadius: 'inherit',
      }} />
      {/* Sparkle stars icon */}
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.98 9.48L6.53 4.84H7.47L9.02 9.48L13.66 11.03V11.97L9.02 13.52L7.47 18.16H6.53L4.98 13.52L0.34 11.97V11.03L4.98 9.48Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.73 3.23L14.53 0.84H15.47L16.27 3.23L18.66 4.03V4.97L16.27 5.77L15.47 8.16H14.53L13.73 5.77L11.34 4.97V4.03L13.73 3.23Z"
          fill="white"
        />
      </svg>
      <span>Create Assignment</span>
    </button>
  );
}

export default function Sidebar() {
  const { currentView, setView, assignments, resetForm } = useAssignmentStore();
  const assignmentCount = assignments.length;

  const handleCreate = () => {
    resetForm();
    setView('create-assignment');
  };

  const navLinks: {
    label: string;
    view: AppView;
    matchViews?: AppView[];
    Icon: React.ComponentType;
    badge?: number;
  }[] = [
    { label: 'Home', view: 'home', Icon: IconHome },
    { label: 'My Groups', view: 'home', Icon: IconMyGroups },
    {
      label: 'Assignments',
      view: 'assignments',
      matchViews: ['assignments', 'create-assignment', 'view-paper'],
      Icon: IconAssignments,
      badge: assignmentCount > 0 ? assignmentCount : undefined,
    },
    { label: "AI Teacher's Toolkit", view: 'ai-toolkit', Icon: IconAIToolkit },
    { label: 'My Library', view: 'library', Icon: IconMyLibrary },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[304px] min-h-screen bg-white border-r border-gray-100 fixed left-0 top-0 z-30">

      {/* ── Logo ── */}
      <div className="px-6 pt-7 pb-5 flex items-center gap-3">
        <button onClick={() => setView('home')} className="flex items-center gap-3">
          <VedaLogoIcon />
          {/* Wordmark text */}
          <span className="text-[22px] font-bold tracking-tight" style={{ color: '#303030', fontFamily: 'system-ui,-apple-system,sans-serif' }}>
            VedaAI
          </span>
        </button>
      </div>

      {/* ── Create Assignment CTA ── */}
      <div className="px-5 mb-5 relative">
        <CreateAssignmentBtn onClick={handleCreate} />
      </div>

      {/* ── Nav Links ── */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {navLinks.map((item) => {
          const activeViews = item.matchViews ?? [item.view];
          const isHomeActive = item.label === 'Home' && currentView === 'home';
          const finalActive = item.label === 'Home' ? isHomeActive :
            item.label === 'My Groups' ? false :
            activeViews.includes(currentView as AppView);

          return (
            <button
              key={item.label}
              onClick={() => setView(item.view)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 group ${
                finalActive
                  ? 'bg-gray-100 font-semibold text-gray-900'
                  : 'font-normal text-[#6b7280] hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={finalActive ? 'text-gray-700' : 'text-[#9ca3af] group-hover:text-gray-600'}>
                <item.Icon />
              </span>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge !== undefined && (
                <span className="text-white text-xs font-bold rounded-full px-2.5 py-0.5 min-w-[28px] text-center" style={{ background: '#F97316' }}>
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* ── Bottom ── */}
      <div className="px-3 pb-5 mt-auto">
        <div className="h-px bg-gray-100 mb-2" />

        {/* Settings */}
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#6b7280] hover:bg-gray-50 hover:text-gray-900 transition-colors mb-2"
        >
          <IconSettings />
          <span>Settings</span>
        </button>

        {/* School card — Figma: light bg, avatar circle, bold name */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
          {/* Avatar: orange-pink circle with emoji/illustration placeholder */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #fde68a 0%, #fca5a5 50%, #f97316 100%)' }}
          >
            🏫
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">Delhi Public School</p>
            <p className="text-xs text-gray-500 truncate">Bokaro Steel City</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
