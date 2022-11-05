import React from 'react';

import Container from '@/components/elements/container';
import SectionTitle from '@/components/elements/section-title';
import useQuestions from '@/hooks/use-questions';

export default function Home() {
  const { questions } = useQuestions();

  if (!questions) return null;

  return (
    <Container>
      <SectionTitle
        title="Lorem ipsum"
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
      />
    </Container>
  );
}
