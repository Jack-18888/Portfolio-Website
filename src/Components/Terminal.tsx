import { useState } from "react";
import "./Terminal.css";

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleCommand = (cmd: string) => {
    let output = "";
    switch (cmd) {
      case "":
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = `Command not found: ${cmd}`;
    }
    if (output) setHistory((prev) => [...prev, `guest@portfolio:~$ ${cmd}`, output]);
    else setHistory((prev) => [...prev, `guest@portfolio:~$ ${cmd}`]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cmd = e.target.value.split(" ").slice(1).join(" ");
    setInput(cmd);
  }

  return (
    <div className="terminal">
      {history.map((line, idx) => (
        <div className="history" key={idx}>{line}</div>
      ))}
      <div>
        <input
          value={`guest@portfolio:~$ ${input}`}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;