import Handler from '@/helpers/handler';

export default Handler().post(async (request, response) =>
  response.status(200).json({ success: true }),
);
