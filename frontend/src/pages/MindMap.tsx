import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Upload,
  FileText,
  Loader2,
} from "lucide-react";

interface Branch {
  title: string;
  subtopics: string[];
}

interface MindMapData {
  central: string;
  branches: Branch[];
}

const MindMap: React.FC = () => {
  const [mindMap, setMindMap] = useState<MindMapData | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // 🔥 MOCK MIND MAP (AI FALLBACK)
  const generateMockMindMap = (fileName: string): MindMapData => ({
    central: fileName || "Uploaded Document",
    branches: [
      {
        title: "Introduction",
        subtopics: ["Overview", "Purpose", "Scope"],
      },
      {
        title: "Key Concepts",
        subtopics: ["Concept A", "Concept B", "Concept C"],
      },
      {
        title: "Process Flow",
        subtopics: ["Step 1", "Step 2", "Step 3"],
      },
      {
        title: "Advantages",
        subtopics: ["Efficiency", "Scalability", "Accuracy"],
      },
      {
        title: "Challenges",
        subtopics: ["Cost", "Complexity", "Maintenance"],
      },
      {
        title: "Conclusion",
        subtopics: ["Summary", "Future Scope", "Final Thoughts"],
      },
    ],
  });

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);
    setLoading(true);

    // ⏳ Fake delay for UX
    setTimeout(() => {
      const mockData = generateMockMindMap(file.name);
      setMindMap(mockData);
      setExpandedNodes(new Set());
      setLoading(false);
    }, 1500);
  };

  const toggleNode = (index: number) => {
    const newSet = new Set(expandedNodes);
    newSet.has(index) ? newSet.delete(index) : newSet.add(index);
    setExpandedNodes(newSet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
          🧠 Document to Mind Map
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Upload a document to generate an interactive mind map
        </p>

        {/* Upload Box */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <label className="cursor-pointer flex flex-col items-center gap-4 p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500">
            <Upload size={48} className="text-gray-400" />
            <p className="font-semibold text-gray-700">
              {uploadedFile ? uploadedFile.name : "Click to upload document"}
            </p>
            <input
              type="file"
              accept=".pdf,.txt,.jpg,.png"
              onChange={handleFileUpload}
              className="hidden"
              disabled={loading}
            />
          </label>

          {loading && (
            <div className="flex justify-center mt-4 text-blue-600 gap-2">
              <Loader2 className="animate-spin" />
              Generating mind map...
            </div>
          )}
        </div>

        {/* Mind Map */}
        {mindMap && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              {mindMap.central}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mindMap.branches.map((branch, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 hover:shadow-md"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleNode(i)}
                  >
                    <h3 className="font-semibold">{branch.title}</h3>
                    {expandedNodes.has(i) ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </div>

                  {expandedNodes.has(i) && (
                    <ul className="mt-3 list-disc list-inside text-gray-600">
                      {branch.subtopics.map((s, j) => (
                        <li key={j}>{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setMindMap(null);
                  setUploadedFile(null);
                  setExpandedNodes(new Set());
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Upload New Document
              </button>
            </div>
          </div>
        )}

        {!mindMap && !loading && (
          <div className="text-center text-gray-400 mt-20">
            <FileText size={64} className="mx-auto mb-4 opacity-50" />
            Upload a document to see the mind map
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMap;
