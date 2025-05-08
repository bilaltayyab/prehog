
'use client';

import React, { useState, useEffect } from 'react';
import type { AnswerOption, Personality, PersonalityId, QuizQuestion } from '@/lib/quiz-data';
import { personalities, personalityIds, questions } from '@/lib/quiz-data';
import QuestionCard from '@/components/quiz/QuestionCard';
import QuizProgressBar from '@/components/quiz/ProgressBar';
import ResultsDisplay from '@/components/quiz/ResultsDisplay';
import { useRouter } from 'next/navigation';

type Scores = Record<PersonalityId, number>;

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(
    personalityIds.reduce((acc, id) => {
      acc[id] = 0;
      return acc;
    }, {} as Scores)
  );
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState<Personality | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const router = useRouter();

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswerIndex(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswerIndex === null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers[selectedAnswerIndex];

    // Update scores
    const newScores = { ...scores };
    for (const personality in selectedAnswer.scores) {
      newScores[personality as PersonalityId] += selectedAnswer.scores[personality as PersonalityId] || 0;
    }
    setScores(newScores);
    
    setIsTransitioning(true);

    setTimeout(() => {
      setSelectedAnswerIndex(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        calculateResult(newScores);
        setQuizCompleted(true);
      }
      setIsTransitioning(false);
    }, 500); // Match animation duration
  };

  const calculateResult = (finalScores: Scores) => {
    let maxScore = -1;
    let dominantPersonalityId: PersonalityId | null = null;

    // Find the personality with the highest score
    // In case of a tie, the first one encountered (based on personalityIds order) wins.
    // A more robust tie-breaking (e.g., random or predefined) could be added if needed.
    for (const id of personalityIds) {
      if (finalScores[id] > maxScore) {
        maxScore = finalScores[id];
        dominantPersonalityId = id;
      }
    }
    
    // If no scores were accumulated (e.g. all answers gave 0 points or quiz error), default to first personality
    if (!dominantPersonalityId) {
        dominantPersonalityId = personalityIds[0];
    }

    const finalPersonality = personalities.find(p => p.id === dominantPersonalityId);
    setResult(finalPersonality || personalities[0]); // Fallback to first personality if something goes wrong
  };

  const handleRestartQuiz = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuestionIndex(0);
      setScores(
        personalityIds.reduce((acc, id) => {
          acc[id] = 0;
          return acc;
        }, {} as Scores)
      );
      setSelectedAnswerIndex(null);
      setQuizCompleted(false);
      setResult(null);
      router.push('/'); // Updated from '/quiz' to '/'
      setIsTransitioning(false);
    }, 500);
  };

  if (quizCompleted && result) {
    return (
      <div className={`w-full max-w-2xl flex flex-col items-center ${isTransitioning ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
        <ResultsDisplay personality={result} onRestart={handleRestartQuiz} />
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressStep = currentQuestionIndex + 1;

  return (
    <div className={`w-full max-w-2xl flex flex-col items-center ${isTransitioning ? 'animate-fadeOut' : ''}`}>
      <QuizProgressBar currentStep={progressStep} totalSteps={questions.length} />
      {!isTransitioning && currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNextQuestion}
          selectedAnswerIndex={selectedAnswerIndex}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
        />
      )}
    </div>
  );
}
