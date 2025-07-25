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
  const [showTooltip, setShowTooltip] = useState(false);
  const [animateInput, setAnimateInput] = useState(true);

  useEffect(() => {
    if (!uuid || typeof uuid !== "string" || uuid.length !== 36) {
      setStatusMessage("⚠️ Invalid UUID format.");
      return;
    }
   
    const fetchPhone = async () => {
      try {
        const res = await fetch(`https://api.amanat.app/api/qr/get-phone?uuid=${uuid}`);

        if (res.status === 404) {
          setStatusMessage("❌ This link is invalid or has expired.");
          setShowForm(false);
          return;
        }

        if (!res.ok) throw new Error("Unexpected server response");

        const data = await res.json();

        if (data.phone_number === null) {
          setStatusMessage("📱 Phone number not set. Please enter it below.");
          setShowForm(true);
        } else {
          setPhoneNumber(data.phone_number);
          setIsSuccess(true);
          setStatusMessage("📞 Call me at:");
          setShowForm(false);
        }
      } catch (err) {
        console.error(err);
        setStatusMessage("🚫 Error verifying your link.");
        setShowForm(false);
      }
    };

    fetchPhone();

    const timer = setTimeout(() => setAnimateInput(false), 1500);
    return () => clearTimeout(timer);
  }, [uuid]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneInput.match(/^\+92\d{10}$/)) {
      alert("Please enter a valid Pakistani phone number (e.g. +923001234567)");
      return;
    }

    try {
      const res = await fetch("https://api.amanat.app/api/qr/set-phone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uuid, phone_number: phoneInput }),
      });

      if (!res.ok) throw new Error("Failed to save number");

      setStatusMessage("✅ Phone number saved successfully!");
      setPhoneNumber(phoneInput);
      setIsSuccess(true);
      setShowForm(false);
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Submission failed. Try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Image src="/logo.png" alt="Amanat Logo" width={100} height={100} />
        <h1 style={styles.heading}>Amanat</h1>

        <div style={{ marginBottom: "1rem", position: "relative" }}>
          <p style={{ display: "inline-block" }}>
            {statusMessage}
            {statusMessage.includes("Phone number") && (
              <span
                onClick={() => setShowTooltip(!showTooltip)}
                style={styles.tooltipIcon}
              >
                ?
              </span>
            )}
          </p>
          {showTooltip && (
            <div style={styles.tooltipBox}>
              <strong>Why your number?</strong>
              <br />
              <strong>Privacy-first:</strong> Number is encrypted & never shared without consent.
              <br />
               <strong>Retail Support:</strong> Link store purchases securely.
              <br />
              <strong>Recovery:</strong> We can help return lost items.
              <br />
              <strong>Rewards:</strong> Unlock perks & benefits on .
              <br />
             <strong>Product Buyers:</strong> If you got this from a store, your number helps recover lost purchases quickly.
            </div>
          )}
        </div>

        {phoneNumber && <h3 style={{ marginBottom: "1rem" }}>{phoneNumber}</h3>}
        {isSuccess && <div style={styles.check}>✅</div>}

        {showForm && (
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <input
              type="tel"
              placeholder="+923001234567"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              required
              className={animateInput ? "animated-input" : ""}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Submit Phone Number
            </button>
          </form>
        )}
      </div>

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

      <style>{`
        @keyframes pulsePlaceholder {
          0% {
            color: #ffffffb0;
            text-shadow: 0 0 5px #00ffc3;
            transform: scale(1);
          }
          50% {
            color: #ffffff;
            text-shadow: 0 0 15px #00ffcc, 0 0 10px #00ffd0;
            transform: scale(1.04);
          }
          100% {
            color: #ffffffb0;
            text-shadow: 0 0 5px #00ffc3;
            transform: scale(1);
          }
        }

        @keyframes glowShake {
          0%, 100% { transform: translateX(0); box-shadow: 0 0 12px #00ffd5; }
          20% { transform: translateX(-3px); }
          40% { transform: translateX(3px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }

        input::placeholder {
          animation: pulsePlaceholder 2.5s infinite ease-in-out;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .animated-input {
          animation: glowShake 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: any } = {
  container: {
    minHeight: "100vh",
    background: "radial-gradient(circle at center, #00a685, #53fcd8)",
    display: "flex",
    flexDirection: "column",
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
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
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
    border: "2px solid #ffffffaa",
    marginBottom: "1rem",
    fontSize: "1.1rem",
    outline: "none",
    backgroundColor: "#ffffff22",
    color: "#fff",
    fontWeight: 500,
    boxShadow: "0 0 15px rgba(0,255,200,0.4)",
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
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tooltipIcon: {
    backgroundColor: "#ff6f61",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginLeft: "0.4rem",
    fontSize: "0.85rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    transform: "translateY(-2px)",
  },
  tooltipBox: {
    backgroundColor: "#fff",
    color: "#333",
    padding: "0.9rem 1rem",
    borderRadius: "10px",
    fontSize: "0.9rem",
    maxWidth: "300px",
    textAlign: "left",
    border: "2px solid #00c49a",
    boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
    marginTop: "0.6rem",
    fontWeight: 500,
    position: "absolute",
    zIndex: 1,
  },
};