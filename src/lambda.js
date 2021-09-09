export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hola Jaime Albornoz!Your request was received at ${event.requestContext.time}.`,
  };
}
