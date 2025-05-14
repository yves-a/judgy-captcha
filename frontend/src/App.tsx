import { useState } from "react";

function App() {
  const [response, setResponse] = useState<{ approved: Boolean, reason: string } | null>(null);

  const sendVibeCheck = async () => {
    const res = await fetch("http://127.0.0.1:5000/evaluate-vibe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: "goose_2" }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="p-6">
      <button onClick={sendVibeCheck} className="bg-indigo-600 text-white p-2 rounded">
        Submit Vibe Check
      </button>
      {response && (
        <div className="mt-4 text-red-500">
          {response.reason}
        </div>
      )}
    </div>
  );
}

export default App;
