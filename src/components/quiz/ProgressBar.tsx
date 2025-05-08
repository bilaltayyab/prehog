'use client';

import type React from 'react';
import { Progress } from '@/components/ui/progress';

interface QuizProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className="w-full px-2 mb-8">
      <Progress value={progressPercentage} className="w-full h-3 bg-secondary" />
      <p className="text-sm text-muted-foreground mt-2 text-center">
        Question {Math.min(currentStep, totalSteps)} of {totalSteps}
      </p>
    </div>
  );
};

export default QuizProgressBar;
