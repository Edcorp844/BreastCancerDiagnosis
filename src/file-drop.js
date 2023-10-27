app.container  = document.getElementById('info-container');
app.dropContainer = function () {
    app.container.addEventListener('dragover', (e) => {
        e.preventDefault();
        app.container.style.border = '2px dashed #555';
        app.container.style.backgroundColor = '#f0f0f077';
    });
    
    app.container.addEventListener('drop', (e) => {
        e.preventDefault();
        app.container.style.border = '2px dashed #3e3d3d';
        app.container.style.backgroundColor = '#45454577';
    
        const file = e.dataTransfer.files[0];
    
        if (file) {
            app.imageURL = URL.createObjectURL(file)
            app.image = file
            app.resultpage();
        }
    });
    
    app.container.addEventListener('dragleave', () => {
        app.container.style.border = '2px dashed #3e3d3d';
        app.container.style.backgroundColor = '#45454577';
    });
}

