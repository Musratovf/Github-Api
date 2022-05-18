const ApiUrl = "https://api.github.com/users/";

const elResult = document.getElementById('result')
const elForm = document.getElementById('form')
const elSearch = document.getElementById('search')

const getUser = async (username) => {
    const res = await  fetch(ApiUrl + username);
    const resData = await res.json()
    console.log(resData);
}
getUser()
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = elSearch.value;

    if(user) {
        getUser(user)
        elSearch.value = '';

    }
})

const createUser = (user) => {
    const cardHTML = `
    <div class="card">
    
    </div>
    `
}