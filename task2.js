async function awaitCall() {
  try {
    const data = await fakeAPICall(); // Simulating an API call
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Simulated API call function
function fakeAPICall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulates a 2 second delay
  });
}

// Example usage
awaitCall();
