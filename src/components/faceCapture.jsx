import React, { useRef, useState, useEffect } from 'react';

const FacialRecognition = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [recognitionResult, setRecognitionResult] = useState(null);

  useEffect(() => {
    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };
    startVideo();
  }, []);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setIsCapturing(true);
    analyzeImage(canvas.toDataURL('image/png'));
  };

  const analyzeImage = async (imageData) => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });
      const result = await response.json();
      setRecognitionResult(result);
    } catch (error) {
      console.error("Error recognizing face:", error);
    }
  };

  return (
    <div>
      <h2>Facial Recognition Component</h2>
      <video ref={videoRef} autoPlay style={{ width: '100%', borderRadius: '8px' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={handleCapture} style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px' }}>
        Capture and Recognize
      </button>
      {isCapturing && (
        <div style={{ marginTop: '20px' }}>
          {recognitionResult ? (
            <div>
              <h3>Recognition Result:</h3>
              <pre>{JSON.stringify(recognitionResult, null, 2)}</pre>
            </div>
          ) : (
            <p>Recognizing...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FacialRecognition;
