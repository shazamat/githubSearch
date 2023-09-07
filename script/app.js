const API_URL = "https://api.github.com/users/";

const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const title = document.querySelector('title');

const getUser = async (username) => {
    const res = await fetch(API_URL + username);
    const resData = await res.json();
    console.log(resData);
    createUser(resData);
}

getUser();

form.addEventListener('submit',  (q) => {
    q.preventDefault();
    const user = search.value;
    if (user) {
        getUser(user);
        search.value = '';
    }
    const title = user.login;
    console.log(title)
})

const createUser = user => {
    const cardHTML = `
        <div class="card">
            <img class="user-img" src= ${user.avatar_url} alt="${user.name}" />
            <div class="user-info">
                <h2 class="name">${user.name}</h2>
                <p class="bio">${user.bio}</p>
                <ul class="info">
                    <ul class="followers">
                        <li class="link"><strong><img src="../img/add-user.png" alt="followers icon" style="height: 20px"></strong>${user.followers}</li>
                        <li class="link"><strong><img src="../img/check.png" alt="followers icon" style="height: 20px"></strong>${user.following}</li>
                        <li class="link"><strong><img src="../img/database.png" alt="followers icon" style="height: 20px"></strong>${user.public_repos}</li>
                    </ul>
                    
                </ul>
            </div>
        </div>
    `
    result.innerHTML = cardHTML;

}







