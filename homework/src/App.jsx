import React from 'react';
 // import './FeatureList.css';Assuming you'll use plain CSS
import FeatureList from './components/preimushestva/FeatureList';
// const FeatureList = () => {
//   const features = [
//     { id: 1, name: 'Неограниченное количество учеников', checked: true },
//     { id: 2, name: 'Трансляции', checked: true },
//     // ... Add the rest of the features here
//   ];

//   return (
//     <div className="feature-list">
//       {features.map((feature) => (
//         <div key={feature.id} className={`feature-item ${feature.checked ? 'checked' : ''}`}>
//           {feature.name}
//           {feature.checked && <span className="checkmark">✔</span>}
//         </div>
//       ))}
//     </div>
//   );
// };\

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <FeatureList />
        </header>
      </div>
    );
  }

export default FeatureList;
