let html = '';
for (let index = 1; index < 9; index++) {
    
    html +=`
    <div class="col-3 px-0" >
        <div class="gallery_image">
            <img src="img/galleryimg${index}.png" alt="">
        </div>
    </div>
    
    `
}
document.getElementById('image_first_line').innerHTML = html;