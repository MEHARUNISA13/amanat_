"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ConnectPage() {
  const { uuid } = useParams();
  const [statusMessage, setStatusMessage] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!uuid || typeof uuid !== "string" || uuid.length !== 36) {
      setStatusMessage("⚠️ Invalid UUID format.");
      return;
    }

    // Simulate API check
    const stored = false;

    if (stored) {
      setPhoneNumber("+923001234567");
      setIsSuccess(true);
    } else {
      setStatusMessage("Phone number not set. Please enter it below.");
      setShowForm(true);
    }
  }, [uuid]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneInput.trim() === "") return;

    setPhoneNumber(phoneInput);
    setIsSuccess(true);
    setShowForm(false);
    setStatusMessage("✅ Phone number saved successfully!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo Centered & Larger */}
        <Image
          src="/logo.png"
          alt="Amanat Logo"
          width={100}
          height={100}
          style={{
            marginBottom: "0rem",
            alignSelf: "center",
          }}
        />
        <h1 style={styles.heading}>Amanat</h1>

        {/* Status Message */}
        <p style={{ marginBottom: "1rem" }}>{statusMessage}</p>

        {/* Display saved number */}
        {phoneNumber && <h3 style={{ marginBottom: "1rem" }}>{phoneNumber}</h3>}

        {/* Success check */}
        {isSuccess && <div style={styles.check}>✅</div>}

        {/* Phone Form */}
        {showForm && (
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <input
              type="tel"
              placeholder="+923001234567"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Submit Phone Number
            </button>
          </form>
        )}
      </div>

      {/* Store Buttons */}
      <div style={styles.storeButtons}>
        <a
          href="https://play.google.com/store/apps/details?id=dev.lancers.amanat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/play.svg" alt="Google Play" width={160} height={48} />
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/appstore.svg" alt="App Store" width={160} height={48} />
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "radial-gradient(circle at center, #00a685, #53fcd8)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(20px)",
    padding: "2rem",
    borderRadius: "24px",
    color: "#fff",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center" as const,
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: "0.5rem",
    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  input: {
    width: "100%",
    padding: "1rem",
    borderRadius: "12px",
    border: "none",
    marginBottom: "1rem",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "1rem",
    background: "#00c49a",
    border: "none",
    borderRadius: "12px",
    fontWeight: 600,
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
  check: {
    fontSize: "2.5rem",
    marginTop: "1rem",
    color: "#4caf50",
  },
  storeButtons: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
};
