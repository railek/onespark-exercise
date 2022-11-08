import React, { useState } from 'react';

import Button from '@/components/elements/button';
import ButtonGroup from '@/components/elements/button-group';
import Card from '@/components/elements/card';
import Container from '@/components/elements/container';
import Progress from '@/components/elements/progress';
import SectionTitle from '@/components/elements/section-title';
import Spinner from '@/components/elements/spinner';
import Success from '@/components/elements/success';
import Form from '@/components/modules/form';
import FormContext from '@/context/form-context';
import useQuestions from '@/hooks/use-questions';
import Delay from '@/utilities/delay';
import FetchJson from '@/utilities/fetch-json';

export default function Home() {
  const { questions, loading } = useQuestions();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const stepCount = questions?.sections?.length || 0;

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await FetchJson('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });
      console.log(data, response);
    } catch (error) {
      console.error(error);
    } finally {
      await Delay(1000);
      setIsLoading(false);
      setSubmitted(true);
      setData({});
    }
  };

  const onUpdate = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleNext = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handleStart = () => {
    setStep(0);
    setSubmitted(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <FormContext.Provider value={{ step, sections: questions.sections, onChange: onUpdate }}>
      <Container>
        <SectionTitle
          title="Get a life insurance quote"
          description="Please fill the form below, Feel free to add as much detail as needed."
        />
        {submitted ? (
          <form>
            <Card>
              <Success />
            </Card>
            <ButtonGroup>
              <Button color="ghost" event={handleStart}>
                Start Over
              </Button>
            </ButtonGroup>
          </form>
        ) : (
          <form onSubmit={handleNext}>
            <Card>
              <Progress step={step} steps={stepCount} />
              <Form />
            </Card>
            <ButtonGroup>
              {step > 0 && (
                <Button className="previous" color="ghost" event={() => setStep(step - 1)}>
                  Previous
                </Button>
              )}
              {step < stepCount - 1 ? (
                <Button className="next" type="submit">
                  Next
                </Button>
              ) : (
                <Button loading={isLoading} event={handleSubmit}>
                  Submit
                </Button>
              )}
            </ButtonGroup>
          </form>
        )}
      </Container>
    </FormContext.Provider>
  );
}
