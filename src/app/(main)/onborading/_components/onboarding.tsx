"use client";

import Funnel from "@/components/commons/funnel";
import { MainLayout } from "@/components/layout";
import ProgressBar from "@/components/progress-bar";
import { useFunnel } from "@/hooks";
import CategoryStep from "./category-step";
import CompleteStep from "./complete-step";
import ProfileStep from "./profile-step";

type Steps = "profile" | "category" | "complete";
type OnboardingState = {
  profile: string;
  categories: string[];
};

export default function Onboarding() {
  const steps: Steps[] = ["profile", "category", "complete"];

  const { currentStep, nextStep, state } = useFunnel<Steps, OnboardingState>(steps, {
    profile: "",
    categories: [],
  });

  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <>
      <MainLayout
        headerProps={currentStep !== "complete" ? { showBackButton: true } : null}
        navigationBarVisible={false}
      >
        {currentStep !== "complete" && (
          <ProgressBar currentStepIndex={currentStepIndex} totalSteps={2} className="max-w-[383px] mx-auto" />
        )}
        <Funnel currentStep={currentStep}>
          <Funnel.Step name="profile">
            <ProfileStep onNext={(profile) => nextStep("category", { profile })} />
          </Funnel.Step>

          <Funnel.Step name="category">
            <CategoryStep onNext={(categories) => nextStep("complete", { categories })} />
          </Funnel.Step>

          <Funnel.Step name="complete">
            <CompleteStep profile="Hobiday" />
          </Funnel.Step>
        </Funnel>
      </MainLayout>
    </>
  );
}
