import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendationsChange = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-8">
      <h1 className="text-3xl font-bold mb-8 mt-8">Recomendador de Produtos RD Station</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2">
        <div className="mb-4">
          <p className="text-rd-gray text-base leading-[1.2] font-normal">
            Selecione suas preferências e funcionalidades desejadas e saiba como a RD pode te ajudar.
          </p>
        </div>
        <Form onRecommendationsChange={handleRecommendationsChange} />
        <div className="mt-8">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
