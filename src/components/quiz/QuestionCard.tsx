'use client';

import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { QuizQuestion, AnswerOption } from '@/lib/quiz-data';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  selectedAnswerIndex: number | null;
  isLastQuestion: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswerSelect,
  onNext,
  selectedAnswerIndex,
  isLastQuestion,
}) => {
  return (
    <Card className="w-full max-w-2xl shadow-xl animate-fadeIn">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-center leading-tight">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {question.answers.map((answer, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={cn(
                "text-left justify-start h-auto py-3 px-4 whitespace-normal break-words transition-all duration-200 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-primary",
                selectedAnswerIndex === index
                  ? 'bg-accent text-accent-foreground border-accent ring-2 ring-accent ring-offset-2'
                  : 'bg-card hover:bg-secondary/70' 
              )}
              onClick={() => onAnswerSelect(index)}
            >
              {answer.text}
            </Button>
          ))}
        </div>
        <Button
          onClick={onNext}
          disabled={selectedAnswerIndex === null}
          className="w-full mt-6 py-3 text-lg font-medium"
          size="lg"
        >
          {isLastQuestion ? 'See Results!' : 'Next Question'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
