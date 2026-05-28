import { useAssignmentStore } from './store/useAssignmentStore';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import MobileHeader from './components/MobileHeader';
import AssignmentsView from './views/AssignmentsView';
import CreateAssignmentView from './views/CreateAssignmentView';
import ViewPaperView from './views/ViewPaperView';
import HomeView from './views/HomeView';
import AIToolkitView from './views/AIToolkitView';

function LibraryView() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center pb-24 lg:pb-8">
      <div className="text-center px-6">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl">
          📚
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">My Library</h2>
        <p className="text-sm text-gray-500">Your saved resources and materials will appear here.</p>
      </div>
    </div>
  );
}

export default function App() {
  const { currentView } = useAssignmentStore();

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView />;
      case 'assignments': return <AssignmentsView />;
      case 'create-assignment': return <CreateAssignmentView />;
      case 'view-paper': return <ViewPaperView />;
      case 'ai-toolkit': return <AIToolkitView />;
      case 'library': return <LibraryView />;
      default: return <AssignmentsView />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop Sidebar — fixed w-[304px] */}
      <Sidebar />

      {/* Main Content — offset by sidebar width on desktop */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden lg:ml-[304px]">
        {/* Mobile header */}
        <MobileHeader />

        {/* Desktop header */}
        <div className="hidden lg:block">
          <Header />
        </div>

        {/* Page Content */}
        <main className="flex flex-col flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}
