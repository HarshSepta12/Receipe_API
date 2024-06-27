let Ameriacan = document.querySelector('#american');
let indian = document.querySelector('#indian');
let canadian = document.querySelector('#canadian');
let japanese = document.querySelector('#japanese');
let british = document.querySelector('#british');
let search = document.querySelector('#search')

const fetchData = async(country)=>{
    const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    const data = await  api.json()
    console.log(data.meals)

    const showData = document.querySelector('.show');
    showData.innerHTML = data.meals.map((items) =>`<div>
    <h2> ${items.strMeal}</h2>
    <img src=${items.
        strMealThumb
        } alt="" style=width:280px; height:280px;"/>
        </div>`).join(" ");
}

Ameriacan.addEventListener('click', (e)=>{
    fetchData("American");
    console.log(e)
})
indian.addEventListener('click', ()=>{
    fetchData("indian");
})
canadian.addEventListener('click', ()=>{
    fetchData("canadian");
})
japanese.addEventListener('click', ()=>{
    fetchData("japanese");
})
british.addEventListener('click', ()=>{
    fetchData("british");
})
