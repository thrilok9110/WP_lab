fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return response.json();
  })
  .then(data => {
    console.log("Success:");
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });