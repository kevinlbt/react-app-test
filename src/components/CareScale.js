
function handleClick(e, l) {
    console.log(e, l);

    if (l === "light") {
        if (e === 1)
        alert('Cette plante requiert peu de lumière')
        if (e === 2)
        alert('Cette plante requiert moyen de lumière')
        if (e === 3)
        alert('Cette plante requiert bcp de lumière')
    }

    if (l !== "light") {
        if (e === 1)
        alert("Cette plante requiert peu d'eau")
        if (e === 2)
        alert("Cette plante requiert moyen d'eau")
        if (e === 3)
        alert("Cette plante requiert bcp d'eau")
    }


}


function CareScale({ scaleValue, careType }) {

    const range = [1, 2, 3]

	const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={ () => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale;