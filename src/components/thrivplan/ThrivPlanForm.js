import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ThrivPlanControl from './ThrivPlanControl';
import { Button } from 'react-bootstrap';

export default function ThrivPlanForm() {
  const checkboxOptionsPhysical = [
    { key: 'smell of', value: 'cSmellOf' },
    { key: 'taste of', value: 'CTasteOf' },
    { key: 'seeing', value: 'cSeeing' },
    { key: 'touching', value: 'cTouching' },
    { key: 'dizzy or lightheaded', value: 'cDizzy' },

    { key: 'touched by', value: 'cTouchedBy' },
    { key: 'sweaty hands', value: 'cSweatyHands' },
    { key: 'crying spells', value: 'cCryingSpells' },
    { key: 'feeling hot', value: 'cFeelingHot' },
    { key: 'wobbliness in legs', value: 'cWobbliness' },

    { key: 'heart pounding/racing', value: 'cHeartPounding' },
    { key: 'sleepiness', value: 'cSleepiness' },
    { key: 'headaches', value: 'cHeadaches' },
    { key: 'numbness or tingling', value: 'cnumbness' },
    { key: 'numerous responsibilities', value: 'cresponsibilities' },
  ];

  const checkboxOptionsMental = [
    { key: 'racing thoughts', value: 'cRacingThoughts' },
    { key: 'flashbacks/intrusive thoughts', value: 'cFlashbacks' },
    { key: 'indecisive', value: 'cIndecisive' },
    { key: 'negative self-talk', value: 'cNegativeSelfTalk' },
    { key: 'self-sabotaging', value: 'cSelfSabotaging' },

    { key: 'worth issues', value: 'cWorthIssues' },
    { key: 'forgetfulness', value: 'cForgetfulness' },
    { key: 'self-critical', value: 'cSelfCritical' },
    { key: 'sealing emotions up', value: 'cSealingEmotions' },
    { key: 'pushing emotions away', value: 'cPushingEmotions' },

    { key: 'over-analyzing', value: 'cHeartPounding' },
    { key: 'reason away emotions', value: 'cSleepiness' },
  ];

  const checkboxOptionsEmotional = [
    { key: 'tired', value: 'cTired' },
    { key: 'fear', value: 'cFear' },
    { key: 'anger', value: 'cAnger' },
    { key: 'sadness', value: 'cSadness' },
    { key: 'irritable', value: 'cIrritable' },

    { key: 'mood swings', value: 'cMoodSwings' },
    { key: 'anxiety', value: 'cAnxiety' },
    { key: 'instability/unknowing', value: 'cInstabilityUnknowing' },
    { key: 'tricked', value: 'cTricked' },
    { key: 'paranoid', value: 'cParanoid' },

    { key: 'fealing of failure', value: 'cFeelingOfFailure' },
    { key: 'guilty', value: 'cGuilty' },
  ];

  const checkboxOptionsSpiritual = [
    { key: 'disconnected', value: 'cDisconnected' },
    { key: 'ungrounded', value: 'cUngrounded' },
    { key: 'spacey', value: 'cSpacey' },
    {
      key: 'reduction of loved activities',
      value: 'cReductionOfLovedActivities',
    },
    { key: 'sabotaging thoughts', value: 'cSabotagingThoughts' },

    { key: 'being the victim', value: 'cBeingTheVictim' },
    { key: 'detached', value: 'cDetached' },
    { key: 'distracted', value: 'cDistracted' },
    { key: 'dissociated', value: 'cDissociated' },
    { key: 'loneliness', value: 'cLoneliness' },

    { key: 'isolation', value: 'cIsolation' },
    { key: 'self-abuse', value: 'cSelfAbuse' },
    {
      key: 'reduction of social interaction',
      value: 'cReductionOfSocialInteraction',
    },
    { key: 'withdrawn', value: 'cWithdrawn' },
    { key: 'injustice', value: 'cInjustice' },
  ];

  const checkboxOptionsCopingSkills = [
    { key: 'deep belly breathing', value: 'cDeapBellyBreathing' },
    { key: 'gratitude', value: 'cGratitude' },
    { key: 'meditation', value: 'cMeditation' },
    { key: 'positive affirmations', value: 'cPositiveAffirmations' },
    { key: 'day dreaming', value: 'cDayDreaming' },
    { key: 'talking with a safe friend', value: 'cTalkingWithSafeFriend' },

    {
      key: 'taking 30 minutes focusing on self',
      value: 'cFocusOnSelf',
    },
    { key: 'delegating', value: 'cDelegating' },
    { key: 'being intentional', value: 'cBeingIntentional' },
    { key: 'schedule rest', value: 'cScheduleRest' },
    {
      key: 'saying "no"/setting limits on time',
      value: 'cSayingNoSettingLimits',
    },
    {
      key: 'yoga, jogging, hiking, exploring',
      value: 'cYogaJoggingHikingExploring',
    },

    { key: 'setting boundaries', value: 'cSettingBoundaries' },
    { key: 'creative activities', value: 'cCreativeActivities' },
    {
      key: 'schedule items that spark joy',
      value: 'cScheduleItemsThatSparkJoy',
    },
    { key: 'journal, writing, poetry', value: 'cJournalWritingPoetry' },
    { key: 'art, dance, coloring, cooking', value: 'cArtDanceColoringCooking' },
  ];

  const initialValues = {
    checkboxOption: [],
  };

  const validationSchema = Yup.object({
    checkboxOption: Yup.array().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div>
          <p className='px-2'>
            <b>Emotional Triggers</b> - Any Circumstances that makes you feel
            uncomfortable. These Triggers cause physical, mental, emotional, and
            spiritual responses that can be overwhelming and disturbing
          </p>
          <Form className='px-2'>
            <ThrivPlanControl
              control='checkbox'
              label='Physical'
              name='checkboxOption'
              options={checkboxOptionsPhysical}
            />
            <Button type='submit' className='my-2'>Next</Button>
          </Form>
          <Form className='px-2'>
            <ThrivPlanControl
              control='checkbox'
              label='Mental'
              name='checkboxOption'
              options={checkboxOptionsMental}
            />
            <Button type='submit' className='my-2'>Next</Button>
          </Form>
          <Form className='px-2'>
            <ThrivPlanControl
              control='checkbox'
              label='Emotional'
              name='checkboxOption'
              options={checkboxOptionsEmotional}
            />
            <Button type='submit' className='my-2'>Next</Button>
          </Form>
          <Form className='px-2'>
            <ThrivPlanControl
              control='checkbox'
              label='Spiritual'
              name='checkboxOption'
              options={checkboxOptionsSpiritual}
            />
            <Button type='submit' className='my-2'>Next</Button>
          </Form>
          <Form className='px-2'>
            <p>
              <b>Coping Skills</b> - Self-loving behavoirs that are healthy, gentle,
              and kind. Activities to be practiced and mastered as tools to use
              as soon as you are at the initial stages of emotions due to an
              emotional trigger.
            </p>
            <br />
            <ThrivPlanControl
              control='checkbox'
              label='CopingSkills'
              name='checkboxOption'
              options={checkboxOptionsCopingSkills}
            />
            <Button type='submit' style={{direction: 'rtl'}} className='my-2'>Next</Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
