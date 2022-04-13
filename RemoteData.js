async function map(location) {
    let response = await fetch(`https://geocode.xyz/${location}?json=1`);
    let jsonObject = await response.json();
    console.log(jsonObject.latt);
    console.log(jsonObject.longt);
}

map();