const Sidebar = () => {
  return (
    <aside className="w-56 bg-gray-100 p-4 border-r">
      <ul className="space-y-3 text-sm">
        <li className="font-medium cursor-pointer">📄 Documents</li>
        <li className="cursor-pointer">📓 Notebook</li>
        <li className="cursor-pointer">🤖 Ask AI</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
