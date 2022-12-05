
import CareScale from './CareScale';

function PlantItem ({ id, cover, name, water, light }) {

    return (
            
            <li key={id} className='lmj-plant-item'>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} `} />
                {name}
                <div>
                    <CareScale careType="light" scaleValue={light} />
                    <CareScale caretype="water" scaleValue={water} />
                </div>
            </li>
        
    )
}

export default PlantItem;