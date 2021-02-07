//Load meal data by searchin eliment
function getMealData(searchItem) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
    .then((res) => res.json())
    .then((mealItems) => displaySearchItems(mealItems));
}

// Display Search Items
const displaySearchItems = (mealItems) => {
  const mealsInfo = mealItems.meals;
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = "";
  if (mealsInfo) {
    mealsInfo.forEach((mealDetails) => {
      const innerDiv = document.createElement("div");
      innerDiv.className = "outer-div";
      innerDiv.innerHTML = `
    <div onclick="handleMealDetails('${mealDetails.idMeal}');" id="inner-div">
    <img src='${mealDetails.strMealThumb}'>
    <h3>${mealDetails.strMeal}</h3>
    </div>
    `;
      mealContainer.appendChild(innerDiv);
    });
  } else {
    mealContainer.innerHTML = `
    <h1 class='error-txt'> Sorry! Your meal item didn't get found. </h1>
    `;
  }
};

// Get Meal Details
const getMealDetails = (mealId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((res) => res.json())
    .then((mealItem) => displayMealDetails(mealItem));
};

//Display Meal Details
const displayMealDetails = (mealItem) => {
  const mealDetails = mealItem.meals;
  const mealDetailContainer = document.getElementById("meal-details");
  mealDetailContainer.innerHTML = "";
  const detailInnerDiv = document.createElement("div");
  mealDetails.forEach((mealDetail) => {
    detailInnerDiv.className = "detail-inner";
    detailInnerDiv.innerHTML = `
    <div class='text-center' >
    <img src='${mealDetail.strMealThumb}'>
    <h2 class='margin-0'> ${mealDetail.strMeal} </h2>
    </div>
    <div>
    <h3>Ingredients</h3>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure1} ${mealDetail.strIngredient1} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure2} ${mealDetail.strIngredient2} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure3} ${mealDetail.strIngredient3} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure4} ${mealDetail.strIngredient4} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure5} ${mealDetail.strIngredient5} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure6} ${mealDetail.strIngredient6} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure7} ${mealDetail.strIngredient7} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure8} ${mealDetail.strIngredient8} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure9} ${mealDetail.strIngredient9} </p>
    <p><i class="fas fa-check-square"></i> ${mealDetail.strMeasure10} ${mealDetail.strIngredient10} </p>
    </div>
    `;
    mealDetailContainer.appendChild(detailInnerDiv);
  });
};

//Handle Meal Details
const handleMealDetails = (mealId) => {
  getMealDetails(mealId);
};

//Handle search button
const handleSearchBtn = () => {
  const inputItem = document.getElementById("input-item").value;
  if (inputItem) {
    getMealData(inputItem);
  } else {
    alert("Put your item please!");
  }
};
