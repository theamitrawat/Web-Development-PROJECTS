const typed = new Typed('#heading', {
    strings: ['Image Search Engine'],
    typeSpeed: 70,
});

const accessKey = 'CP9QGcy9mKQbtYf2ToLR8r-uziel86nSRXzMppFDAuM';

const searchContainer = document.querySelector('.search-container');
const searchResult = document.querySelector('.image-container');
const searchBox = document.getElementById('search-box');
const showMoreBtn = document.getElementById('show-more-btn');
const searchBtn = document.getElementById('search-btn');

let keyword = '';
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.forEach((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = 'block';
}

searchContainer.addEventListener('submit', async (e) => {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = '';
    await searchImage();
});

showMoreBtn.addEventListener('click', () => {
    page++;
    searchImage();
})

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = '';
    searchImage();
});