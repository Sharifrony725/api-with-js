const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container');
    data.data.news_category.slice(0,5).forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class ="tab"> ${category.category_name} </a>
        `;
        tabContainer.appendChild(div)
    });
}
 
//id wise category dynamic
const handleLoadNews = async(categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    data.data.forEach((news) => {
        console.log();
        const div = document.createElement('div');
        div.innerHTML = `<div class="card  bg-base-100 shadow-xl">
                <figure><img src="${news.image_url}" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${news.title.slice(0, 40)}</h2>
                    <p>${news.details.slice(0, 170)}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">${news?.rating?.badge}</button>
                    </div>
                    <div  class ="flex mt-5 items-center justify-around ">
                        <img class="rounded-full" width="50px" height="50px" src="${news.author.img}"/>
                        <p class="pl-2">${news.author?.name}</p>
                        <p>${news.author.published_date}</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-black">Details</button>
                        </div>
                    </div>
                </div>
            </div>`;
            cardContainer.appendChild(div);
    });
}

handleCategory();