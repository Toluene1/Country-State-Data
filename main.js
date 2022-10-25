let countryData = [];
let localGovt = [];
function loadData() {
    fetch("./data/country.json")
        .then((res) => res.json())
        .then((data) => {
            countryData = data;
            populateSelectTagWithCountries(data);
            console.log(countryData);
        });
}

function populateSelectTagWithCountries(arrData) {
    for (const index in arrData) {
        document.getElementById("country").innerHTML += `
          <option value="${arrData[index].name}">${arrData[index].name}</option>  `;
    }
}


function populateState(event) {
    let country_name = event.target.value;
    let sel_state = countryData.filter((item) => {
        return item.name == country_name;
    });
    console.log(sel_state);

    let states_list = sel_state[0].states;
    document.getElementById("states").innerHTML = "";
    for (const index in states_list) {
        document.getElementById("states").innerHTML += `
          <option value="${states_list[index].name}">${states_list[index].name}</option>  `;
    }
}



function loadLga() {
    fetch("./data/lga.json")
        .then((res) => res.json())
        .then((localG) => {
            localGovt = localG;
            console.log(localGovt);
        });
}
loadLga();

function checkLga(event) {
    let lga_name = event.target.value;
    let sel_lga = localGovt.filter((searchs) => {
        return searchs.state == lga_name;
    });
    console.log(sel_lga);

    let lga_list = sel_lga[0].lgas;
    document.getElementById("localGovts").innerHTML = "";
    for (const index in lga_list) {
        document.getElementById("localGovts").innerHTML += `
          <option value="${lga_list[index]}">${lga_list[index]}</option>  `;
    }
}