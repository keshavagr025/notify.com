import { useState } from "react";

const ChatBox = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    setAnswer(`AI answer for: "${question}"`);
  };

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="font-semibold mb-2">🤖 Ask AI</h2>

      <div className="border h-36 p-2 text-sm mb-2">
        {answer || "AI response will appear here"}
      </div>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askAI}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Ask
      </button>
    </div>
  );
};

export default ChatBox;
