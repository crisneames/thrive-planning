import React from "react";
import StepWizard from "react-step-wizard";
import EmotionalExcerpt from "./EmotionalExcerpt";
import WizardStep from "./WizardStep";
import CopingExcerpt from "./CopingExcerpt";

export default function ThrivPlanForm() {
  const checkboxOptionsPhysical = [
    { key: "smell of", value: "cSmellOf", fillIn: true },
    { key: "taste of", value: "CTasteOf", fillIn: true },
    { key: "seeing", value: "cSeeing", fillIn: true },
    { key: "touching", value: "cTouching", fillIn: true },
    { key: "dizzy or lightheaded", value: "cDizzy" },

    { key: "touched by", value: "cTouchedBy", fillIn: true },
    { key: "sweaty hands", value: "cSweatyHands" },
    { key: "crying spells", value: "cCryingSpells" },
    { key: "feeling hot", value: "cFeelingHot" },
    { key: "wobbliness in legs", value: "cWobbliness" },

    { key: "heart pounding/racing", value: "cHeartPounding" },
    { key: "sleepiness", value: "cSleepiness" },
    { key: "headaches", value: "cHeadaches" },
    { key: "numbness or tingling", value: "cnumbness" },
    { key: "numerous responsibilities", value: "cresponsibilities" },
  ];

  const checkboxOptionsMental = [
    { key: "racing thoughts", value: "cRacingThoughts" },
    { key: "flashbacks/intrusive thoughts", value: "cFlashbacks" },
    { key: "indecisive", value: "cIndecisive" },
    { key: "negative self-talk", value: "cNegativeSelfTalk" },
    { key: "self-sabotaging", value: "cSelfSabotaging" },

    { key: "worth issues", value: "cWorthIssues" },
    { key: "forgetfulness", value: "cForgetfulness" },
    { key: "self-critical", value: "cSelfCritical" },
    { key: "sealing emotions up", value: "cSealingEmotions" },
    { key: "pushing emotions away", value: "cPushingEmotions" },

    { key: "over-analyzing", value: "cHeartPounding" },
    { key: "reason away emotions", value: "cSleepiness" },
  ];

  const checkboxOptionsEmotional = [
    { key: "tired", value: "cTired" },
    { key: "fear", value: "cFear" },
    { key: "anger", value: "cAnger" },
    { key: "sadness", value: "cSadness" },
    { key: "irritable", value: "cIrritable" },

    { key: "mood swings", value: "cMoodSwings" },
    { key: "anxiety", value: "cAnxiety" },
    { key: "instability/unknowing", value: "cInstabilityUnknowing" },
    { key: "tricked", value: "cTricked" },
    { key: "paranoid", value: "cParanoid" },

    { key: "fealing of failure", value: "cFeelingOfFailure" },
    { key: "guilty", value: "cGuilty" },
  ];

  const checkboxOptionsSpiritual = [
    { key: "disconnected", value: "cDisconnected" },
    { key: "ungrounded", value: "cUngrounded" },
    { key: "spacey", value: "cSpacey" },
    {
      key: "reduction of loved activities",
      value: "cReductionOfLovedActivities",
    },
    { key: "sabotaging thoughts", value: "cSabotagingThoughts" },

    { key: "being the victim", value: "cBeingTheVictim" },
    { key: "detached", value: "cDetached" },
    { key: "distracted", value: "cDistracted" },
    { key: "dissociated", value: "cDissociated" },
    { key: "loneliness", value: "cLoneliness" },

    { key: "isolation", value: "cIsolation" },
    { key: "self-abuse", value: "cSelfAbuse" },
    {
      key: "reduction of social interaction",
      value: "cReductionOfSocialInteraction",
    },
    { key: "withdrawn", value: "cWithdrawn" },
    { key: "injustice", value: "cInjustice" },
  ];

  const checkboxOptionsCopingSkills = [
    { key: "deep belly breathing", value: "cDeapBellyBreathing" },
    { key: "gratitude", value: "cGratitude" },
    { key: "meditation", value: "cMeditation" },
    { key: "positive affirmations", value: "cPositiveAffirmations" },
    { key: "day dreaming", value: "cDayDreaming" },
    { key: "talking with a safe friend", value: "cTalkingWithSafeFriend" },

    {
      key: "taking 30 minutes focusing on self",
      value: "cFocusOnSelf",
    },
    { key: "delegating", value: "cDelegating" },
    { key: "being intentional", value: "cBeingIntentional" },
    { key: "schedule rest", value: "cScheduleRest" },
    {
      key: 'saying "no"/setting limits on time',
      value: "cSayingNoSettingLimits",
    },
    {
      key: "yoga, jogging, hiking, exploring",
      value: "cYogaJoggingHikingExploring",
    },

    { key: "setting boundaries", value: "cSettingBoundaries" },
    { key: "creative activities", value: "cCreativeActivities" },
    {
      key: "schedule items that spark joy",
      value: "cScheduleItemsThatSparkJoy",
    },
    { key: "journal, writing, poetry", value: "cJournalWritingPoetry" },
    { key: "art, dance, coloring, cooking", value: "cArtDanceColoringCooking" },
  ];

  return (
    <div>
      <StepWizard>
        <WizardStep
          excerpt={<EmotionalExcerpt />}
          label="Physical"
          options={checkboxOptionsPhysical}
        />
        <WizardStep
          excerpt={<EmotionalExcerpt />}
          label="Mental"
          options={checkboxOptionsMental}
        />
        <WizardStep
          excerpt={<EmotionalExcerpt />}
          label="Emotional"
          options={checkboxOptionsEmotional}
        />
        <WizardStep
          excerpt={<EmotionalExcerpt />}
          label="Spiritual"
          options={checkboxOptionsSpiritual}
        />
        <WizardStep
          excerpt={<CopingExcerpt />}
          label="Coping Skills"
          options={checkboxOptionsCopingSkills}
        />
      </StepWizard>
    </div>
  );
}
