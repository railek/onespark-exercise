import fetch from 'node-fetch';

import Handler from '@/helpers/handler';

const HOST = 'https://6356e07f2712d01e14fe89d4.mockapi.io';
const VERSION = 'v1';

export default Handler().get(async (request, response) => {
  const questions = await fetch(`${HOST}/api/${VERSION}/questions`);

  if (!questions.ok) {
    return response.status(questions.status).json({ success: false });
  }

  const json = await questions.json();
  return response.status(200).json(json);
});
