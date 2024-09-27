async function concurrentRequests() {
  try {
    const results = await Promise.all([fakeAPICall(), fakeAPICall()]);
    console.log("Combined results:", results);
  } catch (error) {
    console.error("Error with concurrent requests:", error);
  }
}

// Example usage
concurrentRequests();
