import nextConnect from 'next-connect';

export default function Handler() {
  return nextConnect({
    onError(error, request, response) {
      response.status(501).json({ error: `'Something went wrong' ${error.message}` });
    },
    onNoMatch(request, response) {
      response.status(405).json({ error: `Method ${request.method} Not Allowed` });
    },
  });
}
