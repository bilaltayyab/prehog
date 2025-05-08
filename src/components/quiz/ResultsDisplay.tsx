'use client';

import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Personality } from '@/lib/quiz-data';
import { RefreshCw } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import { useState, useEffect } from 'react';

interface ResultsDisplayProps {
  personality: Personality;
  onRestart: () => void;
}

const HedgehogIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="128"
    className="mx-auto mb-6 text-primary"
    aria-label="Hedgehog icon"
  >
    <path
      d="M15 17C15 14.2667 17.625 12.4 20 11.5C19.1667 8.83333 16.5 6 12 6C7.5 6 4.83333 8.83333 4 11.5C6.375 12.4 9 14.2667 9 17C9 18.6667 7.5 20 7.5 20C7.5 20 16.5 20 16.5 20C16.5 20 15 18.6667 15 17Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 6V5.5C12.5 4.50625 12.9708 4 13.5 4C14.0292 4 14.5 4.50625 14.5 5.5V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 6V5.5C11.5 4.50625 11.0292 4 10.5 4C9.97083 4 9.5 4.50625 9.5 5.5V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 9V8.5C15.5 7.50625 15.9708 7 16.5 7C17.0292 7 17.5 7.50625 17.5 8.5V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 9V8.5C8.5 7.50625 8.02917 7 7.5 7C6.97083 7 6.5 7.50625 6.5 8.5V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 13V12.5C18 11.5062 18.4708 11 19 11C19.5292 11 20 11.5062 20 12.5V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 13V12.5C6 11.5062 5.52917 11 5 11C4.47083 11 4 11.5062 4 12.5V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ personality, onRestart }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState<{width: number | undefined; height: number | undefined}>({width: undefined, height: undefined});

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 8000); // Confetti for 8 seconds
    
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showConfetti && windowSize.width && windowSize.height && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.15}
        />
      )}
      <Card className="w-full max-w-lg shadow-2xl animate-fadeIn">
        <CardHeader className="text-center items-center">
          <div className="text-6xl mb-4">{personality.emoji}</div>
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary">
            You are {personality.name}!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6 md:p-8 text-center">
          <HedgehogIcon />
          <CardDescription className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            {personality.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 p-6">
          <Button onClick={onRestart} variant="outline" size="lg" className="w-full sm:w-auto">
            <RefreshCw className="mr-2 h-5 w-5" />
            Take Again
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ResultsDisplay;
