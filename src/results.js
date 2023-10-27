app.resultpage = function () {
    app.showResults(true);
    app.RequestDiagnosis(app.image);
}

app.showResults = function(isloading) {
    if (isloading) {
        app.container.style.width = '90%';
        app.container.style.height = '500px';
        app.container.style.border = 'none';
        app.container.style.marginTop = '30px';
        app.container.style.backdropFilter = 'blur(20px)';
        app.container.innerHTML = '<img src="Assets/load.gif" width="100" height="100" style="align-self: center;"><p>Daigonising ...</p>';
    } else {
        app.container.style.width = '90%';
        app.container.style.height = 'auto';
        app.container.style.border = 'none';
        app.container.style.marginTop = '30px';
        app.container.style.backdropFilter = 'blur(20px)';
        app.container.innerHTML = '';
        
        const cancelButton = document.createElement('img');
        cancelButton.src = 'Assets/cancle_icon.png';
        cancelButton.style.width = '30px';
        cancelButton.style.height = '30px';
        cancelButton.style.padding = '20px';
        cancelButton.addEventListener('click', function () {
            location.reload();
        });
        
        const imageElement = document.createElement('img');
        imageElement.src = app.imageURL; 
        imageElement.style.maxWidth = '400px';
        imageElement.style.border = '5px solid grey'
        imageElement.style.borderRadius = '5px'

        const resultElement = document.createElement('div');
        resultElement.style.padding = '20px';
        resultElement.style.display = 'flex';
        resultElement.style.flexDirection = 'row';
        resultElement.style.alignItems = 'center';
        resultElement.style.gap = '50px';

        const resultContainer = document.createElement('div');
        resultContainer.style.padding = '5px';
        resultContainer.style.backgroundColor = 'dodgerblue';
        resultContainer.innerText = 'Result:';
        resultContainer.style.borderRadius = '5px';

        const resultText = document.createElement('div');
        resultText.innerText = '  '+app.data['Result'];

        const containerElement = document.createElement('div');
        containerElement.style.display = 'flex'; 
        containerElement.style.flexDirection = 'row';
        containerElement.style.alignItems = 'center';
        containerElement.style.padding = '20px';
        containerElement.style.justifyContent = 'center'; 

        resultElement.appendChild(resultContainer);
        resultElement.appendChild(resultText);

        const WordContainer = document.createElement('div');
        containerElement.style.display = 'flex'; 
        containerElement.style.flexDirection = 'column';
        containerElement.style.alignItems = 'center';
        containerElement.style.padding = '20px';
        containerElement.style.justifyContent = 'center';
        
        WordContainer.appendChild(resultElement)
  
        containerElement.appendChild(imageElement);
        containerElement.appendChild(WordContainer);

        app.container.appendChild(cancelButton);
        app.container.appendChild(containerElement);
        
    }
}

