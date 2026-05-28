import { useAssignmentStore, AppView } from '../store/useAssignmentStore';

/* ── Figma-exact icon components ── */

// Home: 2×2 rounded squares grid (Figma: 4 rect paths with rx corners)
function IconHome({ active }: { active: boolean }) {
  const op = active ? 1 : 0.25;
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path
        d="M0 3.217C0 1.7164 1.2164 0.5 2.717 0.5H5.7736C7.2741 0.5 8.4906 1.7164 8.4906 3.217V6.2736C8.4906 7.7741 7.2741 8.9906 5.7736 8.9906H2.717C1.2164 8.9906 0 7.7741 0 6.2736V3.217Z"
        fill="white"
        fillOpacity={op}
      />
      <path
        d="M9.5093 3.217C9.5093 1.7164 10.7257 0.5 12.2263 0.5H15.2829C16.7834 0.5 17.9998 1.7164 17.9998 3.217V6.2736C17.9998 7.7741 16.7834 8.9906 15.2829 8.9906H12.2263C10.7257 8.9906 9.5093 7.7741 9.5093 6.2736V3.217Z"
        fill="white"
        fillOpacity={op}
      />
      <path
        d="M0 12.7265C0 11.226 1.2164 10.0095 2.717 10.0095H5.7736C7.2741 10.0095 8.4906 11.226 8.4906 12.7265V15.7831C8.4906 17.2837 7.2741 18.5001 5.7736 18.5001H2.717C1.2164 18.5001 0 17.2837 0 15.7831V12.7265Z"
        fill="white"
        fillOpacity={op}
      />
      <path
        d="M9.5093 12.7265C9.5093 11.226 10.7257 10.0095 12.2263 10.0095H15.2829C16.7834 10.0095 17.9998 11.226 17.9998 12.7265V15.7831C17.9998 17.2837 16.7834 18.5001 15.2829 18.5001H12.2263C10.7257 18.5001 9.5093 17.2837 9.5093 15.7831V12.7265Z"
        fill="white"
        fillOpacity={op}
      />
    </svg>
  );
}

// Assignments: Calendar icon (Figma: icon_filled/Calendar)
function IconAssignments({ active }: { active: boolean }) {
  const op = active ? 1 : 0.25;
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.667 1.1666C6.127 1.1666 6.5 1.5397 6.5 2H11.5C11.5 1.5397 11.873 1.1666 12.333 1.1666C12.794 1.1666 13.167 1.5397 13.167 2C15.468 2 17.333 3.8654 17.333 6.1666V13.6666C17.333 15.9678 15.468 17.8333 13.167 17.8333H4.833C2.532 17.8333 0.667 15.9678 0.667 13.6666V6.1666C0.667 3.8654 2.532 2 4.833 2C4.833 1.5397 5.207 1.1666 5.667 1.1666ZM4 7.8333C4 7.3731 4.373 7 4.833 7H13.167C13.627 7 14 7.3731 14 7.8333C14 8.2935 13.627 8.6666 13.167 8.6666H4.833C4.373 8.6666 4 8.2935 4 7.8333ZM11.5 13.6666C11.5 13.2064 11.873 12.8333 12.333 12.8333H13.167C13.627 12.8333 14 13.2064 14 13.6666C14 14.1269 13.627 14.5 13.167 14.5H12.333C11.873 14.5 11.5 14.1269 11.5 13.6666Z"
        fill="white"
        fillOpacity={op}
      />
    </svg>
  );
}

// Library: File + icon (Figma: icon_filled/file-text_plus)
function IconLibrary({ active }: { active: boolean }) {
  const op = active ? 1 : 0.25;
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5833C8 1.3532 7.813 1.1666 7.583 1.1666H4.667C2.826 1.1666 1.333 2.659 1.333 4.5V14.5C1.333 16.3409 2.826 17.8333 4.667 17.8333H11.333C13.174 17.8333 14.667 16.3409 14.667 14.5V8.25C14.667 8.0198 14.48 7.8333 14.25 7.8333H12.167C9.865 7.8333 8 5.9678 8 3.6666V1.5833ZM14.016 6.1666C14.293 6.1666 14.492 5.8991 14.359 5.656C14.246 5.4497 14.104 5.2586 13.934 5.0892L10.744 1.8989C10.575 1.7295 10.384 1.587 10.177 1.474C9.934 1.3409 9.667 1.54 9.667 1.8171V3.6666C9.667 5.0473 10.786 6.1666 12.167 6.1666H14.016ZM8 8.6666C8.46 8.6666 8.833 9.0397 8.833 9.5V11.1666H10.5C10.96 11.1666 11.333 11.5397 11.333 12C11.333 12.4602 10.96 12.8333 10.5 12.8333H8.833V14.5C8.833 14.9602 8.46 15.3333 8 15.3333C7.54 15.3333 7.167 14.9602 7.167 14.5V12.8333H5.5C5.04 12.8333 4.667 12.4602 4.667 12C4.667 11.5397 5.04 11.1666 5.5 11.1666H7.167V9.5C7.167 9.0397 7.54 8.6666 8 8.6666Z"
        fill="white"
        fillOpacity={op}
      />
    </svg>
  );
}

// AI Toolkit: Sparkle/stars (Figma: two sparkle paths)
function IconAIToolkit({ active }: { active: boolean }) {
  const op = active ? 1 : 0.25;
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.638 8.1378L6.184 3.5H7.132L8.678 8.1378L13.316 9.6838V10.6325L8.678 12.1784L7.132 16.8162H6.184L4.638 12.1784L0 10.6325V9.6838L4.638 8.1378Z"
        fill="white"
        fillOpacity={op}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.388 1.8878L14.184 -0.5H15.132L15.928 1.8878L18.316 2.6838V3.6325L15.928 4.4284L15.132 6.8162H14.184L13.388 4.4284L11 3.6325V2.6838L13.388 1.8878Z"
        fill="white"
        fillOpacity={op}
      />
    </svg>
  );
}

export default function MobileNav() {
  const { currentView, setView } = useAssignmentStore();

  const tabs: {
    view: AppView;
    label: string;
    Icon: React.ComponentType<{ active: boolean }>;
  }[] = [
    { view: 'home', label: 'Home', Icon: IconHome },
    { view: 'assignments', label: 'Assignments', Icon: IconAssignments },
    { view: 'library', label: 'Library', Icon: IconLibrary },
    { view: 'ai-toolkit', label: 'AI Toolkit', Icon: IconAIToolkit },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 px-3 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-1">
      {/* Figma: #181818 rounded pill with double drop shadow */}
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: '#181818',
          boxShadow:
            '0px 16px 48px 0px rgba(0,0,0,0.12), 0px 32px 48px 0px rgba(0,0,0,0.20)',
        }}
      >
        <div className="flex items-center justify-around px-1 pt-4 pb-4">
          {tabs.map(({ view, label, Icon }) => {
            const active = currentView === view;
            return (
              <button
                key={view}
                onClick={() => setView(view)}
                className="flex flex-col items-center gap-[7px] flex-1 py-0.5 transition-all duration-150"
              >
                <Icon active={active} />
                <span
                  className="text-[11px] leading-none"
                  style={{
                    color: active ? '#ffffff' : 'rgba(255,255,255,0.25)',
                    fontWeight: active ? 700 : 400,
                    letterSpacing: 0,
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
