import useSWR from 'swr';

import FetchJson from '@/utilities/fetch-json';

export default function UseQuestions() {
  const { data, error } = useSWR('api/questions?', FetchJson);

  return {
    loading: !data && !error,
    error,
    questions: data,
  };
}
