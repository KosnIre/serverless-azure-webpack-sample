/**
 * @file This is a rudimentary utility file used to demonstrate file imports.
 *
 * The code here simply sorts foods based on the categories in the KNOWN_FOODS object,
 * then does an alphabetical sort.
 */


const KNOWN_FOODS = {
  fruits: ['apple', 'banana', 'kiwi', 'mango', 'orange', 'pear'],
  vegetables: ['broccoli', 'carrot', 'mushroom'],
  dairy: ['cheese', 'milk', 'yogurt'],
  meat: ['beef', 'chicken'],
  grains: ['bread', 'cereal', 'oatmeal']
};

export default function sortFood(foodList) {
  const sorted = {
    fruits: [],
    vegetables: [],
    dairy: [],
    meat: [],
    grains: [],
    other: []
  };

  // Categorize each food
  foodList.forEach((food) => {
    let known = false;
    for (const category of Object.keys(KNOWN_FOODS)) {
      if (KNOWN_FOODS[category].includes(food)) {
        sorted[category].push(food);
        known = true;
        break;
      }
    }
    if (!known) {
      sorted.other.push(food);
    }
  });

  alphabetizeValues(sorted);

  return sorted;
}

// Helper function. Modifies the values in-place
function alphabetizeValues(sorted) {
  for (const category of Object.keys(sorted)) {
    sorted[category].sort();
  }
}
