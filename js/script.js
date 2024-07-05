//PEN -->Al clickar en cada una de las banderas tendrá que mostrar la información detallada en una ventana flotante 
//PEN-->Tendrá un botón cerrar para hacer desaparecer esa información.


//AQUÍ EMPIEZA CODIGO

const paisesList = document.getElementById('countries-list');

const getBanderas = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3/all');
        if (!response.ok) {
            throw new Error('Ha surgido un error', response.status);
        }
        const paises = await response.json();

        paises.sort((a, b) => a.name.common.localeCompare(b.name.common));

        paises.forEach(country => {
            const population = country.population;
            const nameCommon = country.name.common;
            const carSide = country.car.side;
            const capital = country.capital ? country.capital[0] : 'N/A'; // por si algún país no tiene capital
            const flag = country.flags ? country.flags[0] : 'N/A'; // por si algún país no tiene bandera
            
            const listItem = document.createElement('li');
            listItem.classList.add('country-item');
    
            const countryImg = document.createElement('img');
            countryImg.src = flag;
            countryImg.alt = `Imagen de ${nameCommon}`;
            countryImg.classList.add('country-flag');
            countryImg.addEventListener('click', () => showCountryDetails()); 
            //console.log('funciona el click en la bandera')
        
            const countryName = document.createElement('h2');
            countryName.textContent = "Nombre :" + nameCommon;

            const countryCapital = document.createElement('p');
            countryCapital.textContent = "Capital: " + capital;

           const countryPopulation = document.createElement('p');
            countryPopulation.textContent = "Población: " + population;

            const countryCarSide = document.createElement('p');
            countryCarSide.textContent = "Lado de la carretera: " + carSide;

            listItem.appendChild(countryImg);
            listItem.appendChild(countryName);
            listItem.appendChild(countryCapital);
            listItem.appendChild(countryPopulation);
            listItem.appendChild(countryCarSide);


            paisesList.appendChild(listItem);
        });

    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
};

const showCountryDetails = (country) => {
    const population = country.population;
    const nameCommon = country.name.common;
    const carSide = country.car.side;
    const capital = country.capital ? country.capital[0] : 'N/A';
    const flag = country.flags ? country.flags[0] : 'N/A';

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('country-details');
    detailsContainer.innerHTML = `
        <div class="details-content">
            <button id="close-btn">Cerrar</button>
            <h2>${nameCommon}</h2>
            <img src="${flag}" alt="Bandera de ${nameCommon}">
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Población:</strong> ${population}</p>
            <p><strong>Lado de la carretera:</strong> ${carSide}</p>
        </div>
    `;

    document.body.appendChild(detailsContainer);

    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(detailsContainer);
    });
};

getBanderas();



//PRIMERO ---> muestra toda la información (bandera, population, carside, capital)
/*const paisesList = document.getElementById('countries-list')

const getBanderas = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3/all');
        if (!response.ok) {
            throw new Error('Ha surgido un error', response.status);
        }
        const paises = await response.json();
        //console.log(paises) ---> para mirar como estan los datos de la API

        paises.forEach(country => {
            const population = country.population;
            const nameCommon = country.name.common;
            const carSide = country.car.side;
            const capital = country.capital ? country.capital[0] : 'N/A'; // por si algun pais no tiene capital
            const flag = country.flags ? country.flags[0] : 'N/A'; // por si algún pais no tiene
            
            paises.sort((A, B) => A.name.common.localeCompare(B.name.common));

            const listItem = document.createElement('li');
    
            const countryImg = document.createElement('img');
            countryImg.src = flag;
            countryImg.src.alt = `Imagen de ${nameCommon}`;
        
            const countryName = document.createElement('h2');
            countryName.textContent = nameCommon;

            const countryPupulation = document.createElement('p');
            countryPupulation.textContent = population;

            const countryCapital = document.createElement('p');
            countryCapital.textContent = capital;

            const countryCarSide = document.createElement('p');
            countryCarSide.textContent = carSide;
    
        
            listItem.appendChild(countryImg);
            listItem.appendChild(countryName);
            listItem.appendChild(countryPupulation);
            listItem.appendChild(countryCapital);
            listItem.appendChild(countryCarSide);

        
            paisesList.appendChild(listItem);
      
            //consolelogs para ver que sale y acceder
            console.log(`Nombre: ${nameCommon}`);
            console.log(`Población: ${population}`);
            console.log(`Capital: ${capital}`);
            console.log(`Bandera: ${flag}`);
          });

    } catch (error) {
        console.log ('Error al obtener los datos', error);
    }

}

getBanderas();
*/
