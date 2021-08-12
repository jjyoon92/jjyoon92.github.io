let pic = document.querySelectorAll('.pic');

let getTitle = function() {
    return console.log((this).dataset.title);
}

// youtube 없는 링크 비활성화
document.querySelector('.no-video').removeAttribute('href');