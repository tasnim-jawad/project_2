let html = '';
for (let index = 1; index < 9; index++) {
    
    html +=`
    <div class="col-3 px-0" >
        <div class="gallery_image">
            <div class="overlay">
                <div class="eye_circle">
                    <a href="#">
                        <i class="far fa-eye"></i>
                    </a>
                </div>
                <h3>Labore et dolore magnam</h3>
                <p>Wordpress</p>
            </div>
            <img src="img/galleryimg${index}.png" alt="">
        </div>
    </div>
    
    `
}
document.getElementById('image_first_line').innerHTML = html;