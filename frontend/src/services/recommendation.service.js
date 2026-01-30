const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products = []
) => {
  if (!products || products.length === 0) {
    return [];
  }

  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType = '' } = formData;

  // Se não há preferências nem funcionalidades selecionadas, retorna array vazio
  if (selectedPreferences.length === 0 && selectedFeatures.length === 0) {
    return [];
  }

  // produto corresponde se contém pelo menos uma preferência selecionada OU pelo menos uma funcionalidade selecionada
  const matchingProducts = products.filter((product) => {
    const matchesPreferences = selectedPreferences.length > 0 && 
      selectedPreferences.some((preference) => product.preferences.includes(preference));

    const matchesFeatures = selectedFeatures.length > 0 && 
      selectedFeatures.some((feature) => product.features.includes(feature));

    return matchesPreferences || matchesFeatures;
  });

  // Se não há produtos correspondentes, retorna array vazio
  if (matchingProducts.length === 0) {
    return [];
  }

  // Se o tipo de recomendação é SingleProduct, retorna apenas o último produto correspondente
  if (selectedRecommendationType === 'SingleProduct') {
    return [matchingProducts[matchingProducts.length - 1]];
  }

  return matchingProducts;
}; 

export default { getRecommendations }; 
