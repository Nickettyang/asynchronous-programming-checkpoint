async function parallelCalls(urls) {
  try {
    const fetchPromises = urls.map((url) => fakeAPICall()); // Replace with actual fetch call
    const responses = await Promise.all(fetchPromises);
    console.log("Responses:", responses);
  } catch (error) {
    console.error("Error fetching from URLs:", error);
  }
}

// Example usage with dummy URLs
parallelCalls(["http://example.com/1", "http://example.com/2"]);
