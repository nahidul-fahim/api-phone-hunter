const phoneDataLoad = function phoneDataLoad(searchText) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayPhones(data))
};

const displayPhones = phones => {
    const phonesData = phones.data;
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

    phonesData.forEach(phone => {
        const deviceCard = document.createElement('div');
        deviceCard.classList = `w-[100%] flex flex-col justify-center items-center text-center gap-5 border-[1px] border-[lightgray] p-8 rounded-md hover:shadow-[0_20px_60px_-5px_#cfcfcf] transition-all duration-300`;
        deviceCard.innerHTML = `
        <div class="p-8 bg-[#ebebeb] rounded-md">
        <img src="${phone.image}" alt="" class="rounded-md">
        </div>
        <h2 class="text-2xl font-bold">${phone.phone_name}</h2>
        <p>${phone.slug}</p>
        <h3 class="text-2xl font-semibold">$999</h3>
        <button class="btn btn-neutral hover:bg-[#262699] hover:text-white hover:border-[#ffffff00] transition-all duration-300">Show Details</button>
        `;
        phoneContainer.appendChild(deviceCard);
    });

}


const searchButtonClicked = () => {
    console.log("The Search button is working");
    const searchInputField = document.getElementById('search-input');
    const searchInputText = searchInputField.value;
    console.log(searchInputText);
    phoneDataLoad(searchInputText);
}

const searchButton = document.getElementById('input-search-button');
searchButton.addEventListener('click', searchButtonClicked);