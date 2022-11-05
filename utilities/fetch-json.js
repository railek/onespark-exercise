const FetchJson = (...args) =>
  fetch(...args).then(async (response) => {
    let payload;

    try {
      if (response.status === 204) return null;
      payload = await response.json();
    } catch (error) {
      console.error(error);
    }

    if (response.ok) return payload;

    return Promise.reject(payload.error || new Error('Something went wrong'));
  });

export default FetchJson;
