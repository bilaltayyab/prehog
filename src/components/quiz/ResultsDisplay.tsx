'use client';

import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Personality } from '@/lib/quiz-data';
import { useToast } from '@/hooks/use-toast';
import { Share2, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import ReactConfetti from 'react-confetti';
import { useState, useEffect } from 'react';

interface ResultsDisplayProps {
  personality: Personality;
  onRestart: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ personality, onRestart }) => {
  const { toast } = useToast();
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

  const handleShare = () => {
    const shareText = `I'm ${personality.name} ${personality.emoji}! What's your PostHog personality? Take the quiz! ${window.location.origin}`;
    navigator.clipboard.writeText(shareText)
      .then(() => {
        toast({
          title: 'Copied to clipboard!',
          description: 'Share your awesome personality with the world!',
        });
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        toast({
          title: 'Oops!',
          description: 'Could not copy to clipboard. Please share manually.',
          variant: 'destructive',
        });
      });
  };

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
          <Image 
            src={personality.image} 
            alt={personality.name} 
            width={400} 
            height={300} 
            className="rounded-lg mx-auto shadow-md mb-6"
            data-ai-hint={personality.imageHint} 
          />
          <CardDescription className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            {personality.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 p-6">
          <Button onClick={handleShare} size="lg" className="w-full sm:w-auto">
            <Share2 className="mr-2 h-5 w-5" />
            Share Result
          </Button>
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
