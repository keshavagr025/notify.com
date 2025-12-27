const NotebookEditor = () => {
  return (
    <div className="bg-white p-4 rounded">
      <h2 className="font-semibold mb-2">📓 Notebook</h2>
      <textarea
        className="w-full h-56 border rounded p-2 text-sm"
        placeholder="AI generated notes will appear here..."
      />
    </div>
  );
};

export default NotebookEditor;
