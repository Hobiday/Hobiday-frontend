"use client";

import { useState } from "react";

type FunnelSteps<T> = T[];

export const useFunnel = <TStep extends string, TState extends object>(
  steps: FunnelSteps<TStep>,
  initialState: TState,
) => {
  const [currentStep, setCurrentStep] = useState<TStep>(steps[0]);
  const [state, setState] = useState<TState>(initialState);

  const nextStep = (next: TStep, data?: Partial<TState>) => {
    setCurrentStep(next);
    if (data) {
      setState((prev) => ({ ...prev, ...data }));
    }
  };

  return { currentStep, nextStep, state };
};
