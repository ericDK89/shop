import action from '@/app/actions/manually-revalidate-tags';

/**
 * Performs a GET request to manually revalidate tags.
 * @return {Promise<Response>} The response from the revalidation request.
 */
export async function GET(): Promise<Response> {
  try {
    await action();
    return new Response('Tags revalidated.');
  } catch (error: any) {
    console.log(error);
    return Response.json({error: error.message});
  }
}
