app.RequestDiagnosis = async function (file) {
    const apiUrl = 'http://127.0.0.1:5000/process';  
    
    const formData = new FormData();
    formData.append('image', file);
    
    fetch(apiUrl, {
        method: 'POST',  // Use POST to send data to the server
        body: formData,  // Send the file path as JSON
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {
        // Handle the data from the Flask API here
        console.log(data);
        app.data = data
        app.showResults(false);
    })
    .catch(error => {
        console.error('Error:', error);
        app.showResults(false);
    });
};

