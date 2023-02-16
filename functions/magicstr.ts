

// Define an array of strings
const strings = ["foo", "bar", "baz"];

// Define the Cloudflare Pages function
export async function handler(request: Request): Promise<Response> {
  // Check if the request method is GET
  if (request.method === "GET") {
    // Get a random string from the array
    const randomString = strings[Math.floor(Math.random() * strings.length)];

    // Create a new response with the random string and CORS headers
    const response = new Response(randomString, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "text/plain",
      },
    });

    return response;
  } else {
    // If the request method is not GET, return a 405 Method Not Allowed response
    return new Response("Method Not Allowed", { status: 405 });
  }
}
