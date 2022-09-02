const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
                    <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        </div>
                    </div>
        `;
        mealContainer.appendChild(mealDiv);
        // console.log(meal);
    });
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchText = document.getElementById('search-text').value;
    loadMeals(searchText);
    document.getElementById('search-text').value = '';
})

const loadMealDetails = (idMeal) => {
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadMealDetails(data.meals[0]))

}

const displayLoadMealDetails = (mealData) => {
    const mealContainer = document.getElementById('meal-card');
    mealContainer.innerHTML = ``;
    mealCard = document.createElement('div');
    mealCard.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${mealData.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mealData.strMeal}</h5>
                <p class="card-text">${mealData.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
    `;
    mealContainer.appendChild(mealCard);

    console.log(mealData);
}
loadMeals('');