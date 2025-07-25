"use client";

import { useState, useRef, useEffect } from "react";

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getResponse = (msg: string) => {
    const lower = msg.toLowerCase();
    if (lower.includes("install")) {
      return "📲 To install Amanat, search for it on the Play Store or App Store and tap install.";
    } else if (lower.includes("lost")) {
      return "🔍 You can track lost items by scanning the QR or using the app.";
    } else if (lower.includes("safe") || lower.includes("secure")) {
      return "🔐 Amanat uses end-to-end encryption to ensure your data is secure.";
    } else {
      return "🤖 Sorry, I didn’t understand. Can you rephrase that?";
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    const botMsg = { from: "bot", text: getResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container(isOpen)}>
        <div style={styles.header} onClick={() => setIsOpen(!isOpen)}>
          💬 Amanat Support
        </div>

        {isOpen && (
          <div style={styles.chat}>
            <div style={styles.messages}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.message,
                    ...(msg.from === "user" ? styles.user : styles.bot),
                  }}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div style={styles.inputArea}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                style={styles.input}
              />
              <button onClick={sendMessage} style={styles.button}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles: { [key: string]: any } = {
  wrapper: {
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 9999,
  },
  container: (isOpen: boolean) => ({
    width: isOpen ? 320 : 180,
    fontFamily: "sans-serif",
  }),
  header: {
    backgroundColor: "#008069",
    color: "#fff",
    padding: "12px",
    borderRadius: "12px 12px 0 0",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
  },
  chat: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "0 0 12px 12px",
    maxHeight: 420,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  messages: {
    flex: 1,
    padding: 10,
    overflowY: "auto",
  },
  message: {
    padding: "10px 14px",
    margin: "6px 0",
    borderRadius: 14,
    maxWidth: "80%",
    fontSize: 14,
    lineHeight: 1.4,
  },
  user: {
    backgroundColor: "#dcf8c6",
    alignSelf: "flex-end",
  },
  bot: {
    backgroundColor: "#f1f0f0",
    alignSelf: "flex-start",
  },
  inputArea: {
    display: "flex",
    padding: 8,
    borderTop: "1px solid #eee",
    backgroundColor: "#fafafa",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    border: "1px solid #ccc",
    borderRadius: 6,
    outline: "none",
  },
  button: {
    marginLeft: 8,
    backgroundColor: "#008069",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  },
};
