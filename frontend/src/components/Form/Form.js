// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendationsChange }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    // Atualiza as recomendações e passa para a lista de recomendações
    if (onRecommendationsChange) {
      onRecommendationsChange(dataRecommendations);
    }
  };

  return (
    <form
      className="w-full p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />
        <Features
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />
      </div>
      <div className="mb-4">
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
      </div>
      <div>
        <SubmitButton text="Obter recomendação" />
      </div>
    </form>
  );
}

export default Form;
