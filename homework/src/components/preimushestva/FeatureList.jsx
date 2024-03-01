import React from 'react';
import './FeatureList.css'; // Assuming you'll use plain CSS
// import okCircle from './img/ok-circle.svg';
import okCircle from './img/ok-circle.svg';

const FeatureList = () => {
  const features = [
    { id: 1, name: 'Неограниченное количество учеников' },
    { id: 2, name: 'Трансляции' },
    { id: 3, name: 'Точная статистика' },
    { id: 4, name: 'Производительную видеосвязь с учениками ' },
    { id: 5, name: 'Продукт с ежемесячной подпиской' },
    { id: 6, name: 'Лучшая конфиденциальность и защита' },
    { id: 7, name: 'Готовый шаблон для организации обучения' },
    { id: 8, name: 'Сообщества' },
    { id: 9, name: 'Любое количество уроков и учебных программ' }
  ];

  return (
    <div className="feature-list">
      {features.map((feature) => (
        <div key={feature.id} className={`feature-item`}>
        <span className="feature-name">{feature.name}</span>
        <img src={okCircle} alt="" className="checkmark" />
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
