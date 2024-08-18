console.log(document.getElementById("button1"));
document.getElementById("button1").addEventListener("click", async function () {
  console.log("Button 1 was clicked!");

  try {
    console.log("before req")
    const response = await fetch("/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "anything",
        completed: true,
      }),
    });

    console.log("message sent");
    console.log(JSON.stringify(response));
    console.log("message sent");
    // Check if the response is ok (status code in the range 200-299)
    if (!response.ok) {
      console.log("response not ok");
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Assuming the server returns JSON
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Error during fetch:", error);
  }
});

document.getElementById("button2").addEventListener("click", function () {
  alert("Button 2 was clicked!");
});
