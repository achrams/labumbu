import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { is } from "vex";
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useDataStore = defineStore("dataStore", () => {
  const recipes = ref([]);
  const products = ref([]);
  const articles = ref([]);
  const categories = ref([]);
  const recommendations = ref([]);
  const isLoading = ref(false);

  const fetchRecommendationRecipes = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${baseURL}/recommendations`);
      const result = response.data[0];

      result.recipes = result.recipes.map((recipe) => ({
        ...recipe,
        image: baseURL + recipe.image,
      }));
      recommendations.value = result;
      isLoading.value = false;
    } catch (error) {
      console.error("Error fetching recommended recipes:", error);
      isLoading.value = false;
    }
  };

  const fetchArticles = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${baseURL}/articles`);
      articles.value = response.data.map((article) => ({
        ...article,
        image: baseURL + article.image,
        optImg: baseURL + article.optImg,
      }));
      isLoading.value = false;
    } catch (error) {
      console.error("Error fetching articles:", error);
      isLoading.value = false;
    }
  };

  const fetchArticleById = async (id) => {
    isLoading.value = true;
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${baseURL}/articles/${id}`);
        const article = response.data;
        article.image = baseURL + article.image;
        article.optImg = baseURL + article.optImg;
        const products = article.recommendedProducts.map((product) => ({
          ...product,
          image: baseURL + product.image,
        }));
        article.recommendedProducts = products;
        const recipes = article.recommendedRecipes.map((recipe) => ({
          ...recipe,
          image: baseURL + recipe.image,
        }));
        article.recommendedRecipes = recipes;

        isLoading.value = false;
        resolve(article);
      } catch (error) {
        console.error("Error fetching article by ID:", error);
        isLoading.value = false;
        reject(error);
      }
    });
  };

  const fetchRecipes = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${baseURL}/recipes`);
      recipes.value = response.data.map((recipe) => ({
        ...recipe,
        image: baseURL + recipe.image,
      }));
      isLoading.value = false;
    } catch (err) {
      console.error("Error fetching articles:", err);
      isLoading.value = false;
    }
  };

  const fetchRecipeById = async (id) => {
    isLoading.value = true;
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${baseURL}/recipes/${id}`);
        const recipe = response.data;
        recipe.image = baseURL + recipe.image;
        resolve(recipe);
      } catch (err) {
        reject(err);
      }
    });
  };

  const fetchCategories = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${baseURL}/categories`);
        const result = response.data.map((cat) => ({
          ...cat,
          image: baseURL + cat.image,
        }));
        categories.value = result;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  return {
    isLoading,
    recipes,
    products,
    articles,
    categories,
    recommendations,
    fetchRecommendationRecipes,
    fetchArticles,
    fetchArticleById,
    fetchRecipes,
    fetchCategories,
    fetchRecipeById,
  };
});
