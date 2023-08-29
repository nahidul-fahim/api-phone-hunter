// Fetching Data from server

const phoneDataLoad = function phoneDataLoad(searchText) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayPhones(data))
};


// Display the phones

const displayPhones = (phones) => {
    const showAllButton = document.getElementById('show-all-button');
    let phonesData = phones.data;
    const phonesDataLength = phonesData.length
    console.log(phonesDataLength);
    if (phonesDataLength >= 12) {
        showAllButton.classList.remove('hidden');
    }
    else {
        showAllButton.classList.add('hidden');
    }

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    phonesData = phonesData.slice(0,12);

    phonesData.forEach(phone => {
        const deviceCard = document.createElement('div');
        deviceCard.classList = `w-[100%] flex flex-col justify-center items-center text-center gap-5 border-[1px] border-[lightgray] p-8 rounded-md hover:shadow-[0_20px_60px_-5px_#cfcfcf] transition-all duration-300`;
        deviceCard.innerHTML = `
        <div class="p-8 bg-[#ebebeb] rounded-md">
        <img src="${phone.image}" alt="" class="rounded-md">
        </div>
        <h2 class="text-2xl font-bold">${phone.phone_name}</h2>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <h3 class="text-2xl font-semibold">$999</h3>
        <button id="show-details-button" class="btn btn-neutral hover:bg-[#262699] hover:text-white hover:border-[#ffffff00] transition-all duration-300">Show Details</button>
        `;
        phoneContainer.appendChild(deviceCard);
    });

    // Hide spinner
    loadingSignFunction(false);
}


// Search button and search input bar functionality

const searchButtonClicked = () => {
    const searchInputField = document.getElementById('search-input');
    const searchInputText = searchInputField.value;
    phoneDataLoad(searchInputText);
    loadingSignFunction(true);
}


// Loading sign function

const loadingSignFunction = (isLoading) => {
    const loadingSign = document.getElementById('loading-sign');
    if (isLoading){
        loadingSign.classList.remove('hidden');
    }
    else {
        loadingSign.classList.add('hidden');
    }
}

const searchButton = document.getElementById('input-search-button');
searchButton.addEventListener('click', searchButtonClicked);


// Show all button functionlaity. (It's incomplete)

const showAllDeviceFunction = () => {
    searchButtonClicked(true);
}

document.getElementById('show-all-button').addEventListener('click', showAllDeviceFunction);


// Show details button functionality

