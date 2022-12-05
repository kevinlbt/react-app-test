import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react'

function ShoppingList ({cart, updateCart}) {

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	const [activeCategory, setActiveCategory] = useState([])
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	

    return (
        <div className='lmj-shopping-list'>
			<Categories 
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) => 
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem 
							cover={cover} 
							name={name} 
							water={water} 
							light={light} 
							price={price}
							/>

							<button className="lmj-button" onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
                	) : null 
				)}
            </ul>
        </div>
    )
}

export default ShoppingList

