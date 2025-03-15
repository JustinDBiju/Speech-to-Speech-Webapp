import { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';

const QAChatPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false); // Track if speech is ongoing
  
  const recognition = useMemo(() => new (window.SpeechRecognition || window.webkitSpeechRecognition)(), []);

  const generateAnswer = useCallback(async (newQuestion) => {
    if (!newQuestion) return;
    setAnswer({ type: 'user', text: newQuestion });

    const predefinedAnswers = {
      "who is bonic bot": "I am a humanoid robot made by Stem Expert.",
      "what is your name": "I am a humanoid robot made by Stem Xpert..",
      "what's your name": "I am a humanoid robot made by Stem Xpert..",
      "Who is the president of America":"Donald Trump is the 47th and current president",
      "what is the date today ": "Today's date is 2025-02-08",
      "What is Stem Expert ?": "Stem Xpert is a company that specializes in AI and robotics.",
    };

    const lowerCaseQuestion = newQuestion.toLowerCase();
    if (predefinedAnswers[lowerCaseQuestion]) {
      setAnswer({ type: 'bot', text: predefinedAnswers[lowerCaseQuestion] });
      speak(predefinedAnswers[lowerCaseQuestion]);
      return;
    }

    setQuestion("Loading...");
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key= api key ", {
        contents: [{ parts: [{ text: newQuestion }] }], 
      });

      const answerText = response.data.candidates[0].content.parts[0].text.replace(/[*#]/g, '');
      setAnswer({ type: 'bot', text: answerText });
      speak(answerText);
    } catch (error) {
      setAnswer({ type: 'bot', text: "Sorry, I couldn't fetch an answer." });
      speak("Sorry, I couldn't fetch an answer.");
    }
  }, []);

  useEffect(() => {
    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      await generateAnswer(transcript);
    };

    recognition.onend = () => setIsListening(false);
  }, [recognition, generateAnswer]);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.onstart = () => setIsSpeaking(true); // Set speaking state to true when speaking starts
    speech.onend = () => setIsSpeaking(false); // Set speaking state to false when speaking ends
    window.speechSynthesis.speak(speech);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel(); // Stop the ongoing speech synthesis
    setIsSpeaking(false); // Update state to reflect speech stopped
  };

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        width: "100vw",
        background: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay for readability
        color: "white",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Ask anything you want!</h3>
      {answer ? (
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            padding: "15px",
            borderRadius: "10px",
            maxWidth: "80%",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              display: "block",
              marginBottom: "5px",
            }}
          >
            {answer.type === "user" ? "You" : "Robo"}
          </span>
          <p style={{ margin: 0 }}>{answer.text}</p>
        </div>
      ) : (
        <div style={{ marginBottom: "20px", fontSize: "16px", opacity: "0.7" }}>
          Ask anything...
        </div>
      )}
      <button
        onClick={startListening}
        style={{
          background: "#6200ea",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          transition: "0.3s",
          width: "200px",
        }}
      >
        {isListening ? "Listening..." : "Speak"}
      </button>

      {/* Stop button to cancel speech */}
      {isSpeaking && (
        <button
          onClick={stopSpeaking}
          style={{
            background: "#f44336", // Red color for stop button
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
            width: "200px",
          }}
        >
          Stop
        </button>
      )}
    </div>
  );
};

export default QAChatPage;
