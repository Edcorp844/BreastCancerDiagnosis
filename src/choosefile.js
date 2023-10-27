const q = (s) => document.querySelector(s);
q('#imageInput').addEventListener('change', () => {
    const file = q('#imageInput').files[0];
    if (file) {
        app.imageURL = URL.createObjectURL(file);
        app.image = file
        app.resultpage();
    }
});
q('#addbtn').addEventListener('click', () => q('#imageInput').click());
