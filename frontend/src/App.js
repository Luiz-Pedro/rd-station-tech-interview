import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendationsChange = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Recomendador de Produtos RD Station</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div>
          <Form onRecommendationsChange={handleRecommendationsChange} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
