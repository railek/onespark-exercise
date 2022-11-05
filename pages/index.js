import React, { useState } from 'react';

import Button from '@/components/elements/button';
import ButtonGroup from '@/components/elements/button-group';
import Card from '@/components/elements/card';
import Container from '@/components/elements/container';
import Progress from '@/components/elements/progress';
import SectionTitle from '@/components/elements/section-title';
import useQuestions from '@/hooks/use-questions';
import Delay from '@/utilities/delay';
import FetchJson from '@/utilities/fetch-json';

export default function Home() {
  const { questions } = useQuestions();
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stepCount = questions?.sections?.length || 0;

  if (!questions) return null;

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await FetchJson('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: 'test' }),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      await Delay(1000);
      setIsLoading(false);
      setSubmitted(true);
    }
  };

  const handleStart = () => {
    setActiveIndex(0);
    setSubmitted(false);
  };

  return (
    <Container>
      <SectionTitle
        title="Lorem ipsum"
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
      />

      {submitted ? (
        <>
          <Card>
            <p>Your answers have been submitted!</p>
          </Card>
          <ButtonGroup>
            <Button color="ghost" event={handleStart}>
              Start Over
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <Card>
            <Progress activeIndex={activeIndex} steps={stepCount} />
            <p>Form</p>
          </Card>
          <ButtonGroup>
            {activeIndex > 0 && (
              <Button
                className="previous"
                color="ghost"
                event={() => setActiveIndex(activeIndex - 1)}
              >
                Previous
              </Button>
            )}
            {activeIndex < stepCount - 1 && (
              <Button className="next" event={() => setActiveIndex(activeIndex + 1)}>
                Next
              </Button>
            )}
            {activeIndex === stepCount - 1 && (
              <Button loading={isLoading} event={handleSubmit} type="submit">
                Submit
              </Button>
            )}
          </ButtonGroup>
        </>
      )}
    </Container>
  );
}
