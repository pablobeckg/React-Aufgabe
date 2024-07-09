import animals from "../../data";
import AnimalItem from "../AnimalItem/AnimalItem";
import './AnimalList.css'

const AnimalList = () => {
  return (
    <section>
      <h1>ZooPartyDB</h1>
      <h3>Explore the fascinating world of zoo animals!</h3>
      <div className="animals-wrapper">
        {animals.map((item, index) => (
          <AnimalItem
            key={index}
            name={item.name}
            species={item.species}
            habitat={item.habitat}
            lifespan={item.lifespan}
            diet={item.diet}
            funFacts={item.funFacts}
            emoji={item.emoji}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimalList;
