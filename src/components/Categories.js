import React from 'react';
import Select from 'react-select';


function Categories ({ setActiveCategory, categories, activeCategory }) {

    const Options =
        categories.map((cat) => (
            { value: cat, label: cat }
        ))        

    function handleCategories (e) {

        let cate = [];
        for (let i = 0 ; i < e.length ; i++) {
            if (e[i].value) {
                cate.push(e[i].value);
            }
        }
        console.log(cate);

        setActiveCategory(cate[0]);

        console.log(activeCategory);

    }

    const MySelect = () => ( 
        <Select
        closeMenuOnSelect={false}
        value={activeCategory}
        isMulti
        onChange={(e) => handleCategories(e)}
        options={Options}
    /> 
    )

    return (
        <div className='lmj-categories'>

            <MySelect/>

			{/* <select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select> */}
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
    )
}

export default Categories

