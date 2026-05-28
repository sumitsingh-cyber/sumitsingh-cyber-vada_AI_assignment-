import { useState, useRef } from 'react';
import { useAssignmentStore, QUESTION_TYPE_OPTIONS } from '../store/useAssignmentStore';

const DIFFICULTY_OPTIONS = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Mixed (Easy + Medium)' },
  { value: 'hard', label: 'Advanced (All Difficulties)' },
];

const SUBJECT_OPTIONS = [
  'Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology',
  'English', 'Hindi', 'History', 'Geography', 'Social Science',
  'Computer Science', 'Economics', 'Political Science',
];

const GRADE_OPTIONS = [
  '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th',
];

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-1 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i < step ? 'bg-gray-800' : 'bg-gray-200'
          } ${i === 0 ? 'flex-[3]' : 'flex-1'}`}
        />
      ))}
    </div>
  );
}

export default function CreateAssignmentView() {
  const {
    formData,
    setFormData,
    addQuestionType,
    removeQuestionType,
    updateQuestionType,
    createAssignment,
    setView,
  } = useAssignmentStore();

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.grade) newErrors.grade = 'Grade is required';
    if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
    if (!formData.title) newErrors.title = 'Assignment title is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (formData.questionTypes.length === 0) {
      newErrors.questionTypes = 'Add at least one question type';
    }
    formData.questionTypes.forEach((qt, idx) => {
      if (qt.count <= 0) newErrors[`count-${idx}`] = 'Must be > 0';
      if (qt.marks <= 0) newErrors[`marks-${idx}`] = 'Must be > 0';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, 2));
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;
    await createAssignment();
  };

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setErrors((e) => ({ ...e, file: 'File too large. Max 10MB.' }));
      return;
    }
    setFormData({ uploadedFile: file, uploadedFileName: file.name });
    setErrors((e) => ({ ...e, file: '' }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-32 lg:pb-8">
      {/* Page header */}
      <div className="hidden lg:block px-6 py-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-300"></div>
          <h1 className="text-xl font-bold text-gray-900">Create Assignment</h1>
        </div>
        <p className="text-sm text-gray-500 ml-5">Set up a new assignment for your students</p>
      </div>

      <div className="flex-1 px-3 sm:px-4 lg:px-8 py-5 sm:py-6 max-w-3xl mx-auto w-full">
        <StepIndicator step={step} total={2} />

        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Assignment Details</h2>
            <p className="text-sm text-gray-500 mb-6">Basic information about your assignment</p>

            {/* File Upload — Figma exact */}
            <div
              className={`relative rounded-2xl mb-2 transition-all duration-200 cursor-pointer overflow-hidden ${
                isDragging ? 'ring-2 ring-orange-400' : ''
              }`}
              style={{
                background: isDragging ? '#fff7ed' : '#ffffff',
                border: '1.75px dashed',
                borderColor: isDragging ? '#fb923c' : '#d1d5db',
                /* Figma dashed border: "8 8" pattern with rounded corners */
                backgroundImage: isDragging ? 'none' : 'none',
              }}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {/* Figma SVG dashed border overlay (exact match) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 746 202"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0H722C735.255 0 746 10.7452 746 24V178C746 191.255 735.255 202 722 202H24C10.7452 202 0 191.255 0 178V24Z"
                  fill="white"
                />
                <path
                  d="M718.034 0V0.875H722C723.545 0.875 725.055 1.02679 726.514 1.31543L726.683 0.458008C729.832 1.08082 732.759 2.31897 735.334 4.04297L734.848 4.76953C737.37 6.4581 739.542 8.63015 741.23 11.1523L741.956 10.665C743.68 13.2402 744.918 16.1674 745.541 19.3164L744.685 19.4863C744.973 20.9455 745.125 22.4546 745.125 24V27.8496H746V35.5498H745.125V43.25H746V50.9502H745.125V58.6504H746V66.3496H745.125V74.0498H746V81.75H745.125V89.4502H746V97.1504H745.125V104.85H746V112.55H745.125V120.25H746V127.95H745.125V135.65H746V143.35H745.125V151.05H746V158.75H745.125V166.45H746V174.15H745.125V178C745.125 179.545 744.973 181.055 744.685 182.514L745.541 182.683C744.918 185.832 743.68 188.759 741.956 191.334L741.23 190.848C739.542 193.37 737.37 195.542 734.848 197.23L735.334 197.956C732.759 199.68 729.832 200.918 726.683 201.541L726.514 200.685C725.055 200.973 723.545 201.125 722 201.125H718.034V202H710.103V201.125H702.171V202H694.239V201.125H686.308V202H678.375V201.125H670.443V202H662.512V201.125H654.58V202H646.648V201.125H638.716V202H630.784V201.125H622.853V202H614.921V201.125H606.989V202H599.057V201.125H591.125V202H583.193V201.125H575.262V202H567.33V201.125H559.398V202H551.466V201.125H543.534V202H535.603V201.125H527.671V202H519.739V201.125H511.807V202H503.875V201.125H495.943V202H488.012V201.125H480.08V202H472.147V201.125H464.216V202H456.284V201.125H448.353V202H440.421V201.125H432.489V202H424.557V201.125H416.625V202H408.693V201.125H400.762V202H392.83V201.125H384.897V202H376.966V201.125H369.034V202H361.103V201.125H353.171V202H345.238V201.125H337.307V202H329.375V201.125H321.443V202H313.512V201.125H305.58V202H297.647V201.125H289.716V202H281.784V201.125H273.853V202H265.921V201.125H257.988V202H250.057V201.125H242.125V202H234.193V201.125H226.262V202H218.329V201.125H210.397V202H202.466V201.125H194.534V202H186.603V201.125H178.671V202H170.738V201.125H162.807V202H154.875V201.125H146.943V202H139.012V201.125H131.079V202H123.147V201.125H115.216V202H107.284V201.125H99.3525V202H91.4209V201.125H83.4883V202H75.5566V201.125H67.625V202H59.6934V201.125H51.7617V202H43.8291V201.125H35.8975V202H27.9658V201.125H24C22.4546 201.125 20.9455 200.973 19.4863 200.685L19.3164 201.541C16.1674 200.918 13.2402 199.68 10.665 197.956L11.1523 197.23C8.63015 195.542 6.4581 193.37 4.76953 190.848L4.04297 191.334C2.31897 188.759 1.08082 185.832 0.458008 182.683L1.31543 182.514C1.02679 181.055 0.875 179.545 0.875 178V174.15H0V166.45H0.875V158.75H0V151.05H0.875V143.35H0V135.65H0.875V127.95H0V120.25H0.875V112.55H0V104.85H0.875V97.1504H0V89.4502H0.875V81.75H0V74.0498H0.875V66.3496H0V58.6504H0.875V50.9502H0V43.25H0.875V35.5498H0V27.8496H0.875V24C0.875 22.4546 1.02679 20.9455 1.31543 19.4863L0.458008 19.3164C1.08094 16.1676 2.31891 13.2401 4.04297 10.665L4.76953 11.1523C6.4581 8.63015 8.63015 6.4581 11.1523 4.76953L10.665 4.04297C13.2401 2.31891 16.1676 1.08094 19.3164 0.458008L19.4863 1.31543C20.9455 1.02679 22.4546 0.875 24 0.875H27.9658V0H35.8975V0.875H43.8291V0H51.7607V0.875H59.6924V0H67.625V0.875H75.5566V0H83.4883V0.875H91.4199V0H99.3516V0.875H107.284V0H115.216V0.875H123.147V0H131.079V0.875H139.011V0H146.943V0.875H154.875V0H162.807V0.875H170.738V0H178.67V0.875H186.602V0H194.534V0.875H202.466V0H210.397V0.875H218.329V0H226.261V0.875H234.193V0H242.125V0.875H250.057V0H257.988V0.875H265.92V0H273.853V0.875H281.784V0H289.716V0.875H297.647V0H305.579V0.875H313.511V0H321.443V0.875H329.375V0H337.307V0.875H345.238V0H353.17V0.875H361.103V0H369.034V0.875H376.966V0H384.897V0.875H392.829V0H400.762V0.875H408.693V0H416.625V0.875H424.557V0H432.488V0.875H440.42V0H448.353V0.875H456.284V0H464.216V0.875H472.147V0H480.079V0.875H488.012V0H495.943V0.875H503.875V0H511.807V0.875H519.738V0H527.671V0.875H535.603V0H543.534V0.875H551.466V0H559.397V0.875H567.329V0H575.262V0.875H583.193V0H591.125V0.875H599.057V0H606.988V0.875H614.921V0H622.853V0.875H630.784V0H638.716V0.875H646.647V0H654.579V0.875H662.512V0H670.443V0.875H678.375V0H686.307V0.875H694.238V0H702.171V0.875H710.103V0H718.034Z"
                  stroke="black"
                  strokeOpacity="0.15"
                  strokeWidth="1.75"
                  strokeDasharray="8 8"
                />
              </svg>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center py-10 sm:py-12 px-4 sm:px-6 text-center">
                {formData.uploadedFileName ? (
                  <>
                    {/* Upload cloud icon */}
                    <div className="w-10 h-10 mb-5 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 16L8 12M12 16L16 12M12 16V9" />
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                      </svg>
                    </div>
                    <p className="text-base font-semibold text-gray-900 mb-1 break-all">{formData.uploadedFileName}</p>
                    <p className="text-sm text-green-600">✓ File selected</p>
                  </>
                ) : (
                  <>
                    {/* Figma upload cloud icon — exact from SVG */}
                    <div className="w-10 h-10 mb-5 flex items-center justify-center">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 16L12 12L15 16" />
                        <path d="M12 12V21" />
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                      </svg>
                    </div>
                    <p className="text-[15px] font-semibold text-[#303030] mb-1.5">
                      Choose a file or drag &amp; drop it here
                    </p>
                    <p className="text-sm text-[#a9a9a9] mb-7">JPEG, PNG, upto 10MB</p>
                    {/* Browse Files button — Figma: #F6F6F6 rounded pill */}
                    <button
                      type="button"
                      className="px-8 py-3 rounded-full text-sm font-semibold text-[#303030] transition-colors hover:bg-gray-200"
                      style={{ background: '#F6F6F6' }}
                      onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                    >
                      Browse Files
                    </button>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.pdf,.txt"
                  onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>
            <p className="text-xs text-[#a9a9a9] text-center mb-6">Upload images of your preferred document/image</p>
            {errors.file && <p className="text-red-500 text-xs mb-4">{errors.file}</p>}

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Assignment Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Quiz on Electricity"
                value={formData.title}
                onChange={(e) => setFormData({ title: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors.title ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                }`}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            {/* Subject & Grade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white ${
                    errors.subject ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                  }`}
                >
                  <option value="">Select Subject</option>
                  {SUBJECT_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Grade/Class <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ grade: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white ${
                    errors.grade ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                  }`}
                >
                  <option value="">Select Grade</option>
                  {GRADE_OPTIONS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
              </div>
            </div>

            {/* Topic */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Topic / Chapter</label>
              <input
                type="text"
                placeholder="e.g., Electricity, Photosynthesis, World War II"
                value={formData.topic}
                onChange={(e) => setFormData({ topic: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm outline-none transition-all"
              />
            </div>

            {/* Due Date */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Due Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.dueDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ dueDate: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.dueDate ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                  }`}
                />
              </div>
              {errors.dueDate && <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>}
            </div>

            {/* Time Allowed */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Time Allowed (minutes)</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ totalTime: Math.max(15, formData.totalTime - 15) })}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/></svg>
                </button>
                <span className="text-base font-semibold text-gray-800 w-12 text-center">{formData.totalTime}</span>
                <button
                  type="button"
                  onClick={() => setFormData({ totalTime: Math.min(180, formData.totalTime + 15) })}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
                <span className="text-sm text-gray-500">minutes</span>
              </div>
            </div>

            {/* School Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">School Name</label>
              <input
                type="text"
                placeholder="e.g., Delhi Public School"
                value={formData.schoolName}
                onChange={(e) => setFormData({ schoolName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm outline-none transition-all"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Question Configuration</h2>
            <p className="text-sm text-gray-500 mb-6">Configure question types, counts, and marks</p>

            {/* Question Type Header */}
            <div className="hidden sm:grid grid-cols-12 gap-3 mb-3 px-1">
              <div className="col-span-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">Question Type</div>
              <div className="col-span-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">No. of Qs</div>
              <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">Marks</div>
              <div className="col-span-1"></div>
            </div>

            {errors.questionTypes && (
              <p className="text-red-500 text-xs mb-3">{errors.questionTypes}</p>
            )}

            <div className="space-y-3 mb-5">
              {formData.questionTypes.map((qt) => (
                <div key={qt.id} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch sm:items-center p-3 bg-gray-50 rounded-xl">
                  {/* Type selector */}
                  <div className="sm:col-span-6 min-w-0">
                    <label className="block sm:hidden text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Question Type
                    </label>
                    <select
                      value={qt.type}
                      onChange={(e) => updateQuestionType(qt.id, { type: e.target.value })}
                      className="w-full min-w-0 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all"
                    >
                      {QUESTION_TYPE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Count */}
                  <div className="sm:col-span-3 flex items-center justify-between sm:justify-center gap-3">
                    <span className="sm:hidden text-xs font-semibold text-gray-500 uppercase tracking-wide">Questions</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => updateQuestionType(qt.id, { count: Math.max(1, qt.count - 1) })}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-semibold text-gray-800">{qt.count}</span>
                      <button
                        type="button"
                        onClick={() => updateQuestionType(qt.id, { count: Math.min(20, qt.count + 1) })}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Marks */}
                  <div className="sm:col-span-2 flex items-center justify-between sm:justify-center gap-3">
                    <span className="sm:hidden text-xs font-semibold text-gray-500 uppercase tracking-wide">Marks</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => updateQuestionType(qt.id, { marks: Math.max(1, qt.marks - 1) })}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-sm font-semibold text-gray-800">{qt.marks}</span>
                      <button
                        type="button"
                        onClick={() => updateQuestionType(qt.id, { marks: Math.min(20, qt.marks + 1) })}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <div className="sm:col-span-1 flex justify-end sm:justify-center">
                    <button
                      type="button"
                      onClick={() => removeQuestionType(qt.id)}
                      disabled={formData.questionTypes.length <= 1}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-30"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addQuestionType}
              disabled={formData.questionTypes.length >= 6}
              className="flex items-center gap-2 text-sm text-orange-600 font-semibold hover:text-orange-700 transition-colors disabled:opacity-40 mb-6"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Question Type
            </button>

            {/* Difficulty */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Difficulty Level</label>
              <div className="space-y-2">
                {DIFFICULTY_OPTIONS.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="radio"
                      name="difficulty"
                      value={opt.value}
                      checked={formData.difficulty === opt.value}
                      onChange={(e) => setFormData({ difficulty: e.target.value as any })}
                      className="w-4 h-4 text-orange-500"
                    />
                    <span className="text-sm text-gray-700 font-medium">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Instructions */}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Additional Instructions</label>
              <textarea
                placeholder="e.g., All questions are compulsory. Use blue/black pen only."
                value={formData.instructions}
                onChange={(e) => setFormData({ instructions: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm outline-none transition-all resize-none"
              />
            </div>

            {/* Summary */}
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
              <h4 className="text-sm font-semibold text-orange-800 mb-2">Summary</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-orange-700">
                <span>Total Questions: <strong>{formData.questionTypes.reduce((s, q) => s + q.count, 0)}</strong></span>
                <span>Total Marks: <strong>{formData.questionTypes.reduce((s, q) => s + q.count * q.marks, 0)}</strong></span>
                <span>Sections: <strong>{formData.questionTypes.length}</strong></span>
                <span>Time: <strong>{formData.totalTime} min</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 mt-6">
          <button
            type="button"
            onClick={() => step === 1 ? setView('assignments') : setStep(1)}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 sm:px-6 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all shadow-sm text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Previous
          </button>
          {step < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 sm:px-6 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-md text-sm"
            >
              Next
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 sm:px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Generate Paper
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
