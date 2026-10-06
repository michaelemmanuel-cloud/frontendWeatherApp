
const form = document.getElementById('weatherForm')
const inputField = document.getElementById('searchInput')

form.addEventListener('submit', async(e)=> {
    e.preventDefault()
    const city = inputField.value.trim()

    if(!city){
        alert('provide a city')
        return
    }

    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
        const data = await response.json()

        if(!response.ok){
            console.log(data.message)
        }
        showWeather(data)
    }catch(error){
        console.log(error.message)
    }
})
function showWeather(data){
    document.getElementById('weatherCity').textContent = `${data.city}, ${data.country}`;
    document.getElementById('weatherTemp').textContent = `${data.temp}°`
    document.getElementById('weatherFeels_like').textContent = `${data.feels_like}°`
    document.getElementById('weatherHumidity').textContent = `${data.humidity}`
    document.getElementById('locationID').textContent = `Location ID: ${data.id}`;
}
;
