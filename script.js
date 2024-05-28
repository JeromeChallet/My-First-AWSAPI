document.getElementById("helloButton").addEventListener("click", function () {
  // Hide the button
  this.style.display = "none";

  // Make the API request
  fetch(
    "https://dk4ce145gc.execute-api.ap-northeast-1.amazonaws.com/jeromeStageName01"
  )
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      // Extract the "body" content from the response
      const bodyContent = JSON.parse(data.body);

      // Display the extracted content
      const apiResponse = document.getElementById("apiResponse");
      apiResponse.textContent = bodyContent; // Set text content of div
      apiResponse.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching the API:", error);
    });
});
