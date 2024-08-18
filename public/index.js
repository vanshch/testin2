console.log(document.getElementById("button1"));
document.getElementById("button1").addEventListener('click', async function() {
    console.log("Button 1 was clicked!");

    try {
        const response = await fetch('/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1
            })
        });

        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Assuming the server returns JSON
        console.log('Response from server:', data);

    } catch (error) {
        console.error('Error during fetch:', error);
    }
});

document.getElementById('button2').addEventListener('click', function() {
    alert('Button 2 was clicked!');
});
