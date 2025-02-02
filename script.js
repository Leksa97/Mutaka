function changeImage(imageName) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageName;
    mainImage.alt = imageName.split('.')[0];
}
