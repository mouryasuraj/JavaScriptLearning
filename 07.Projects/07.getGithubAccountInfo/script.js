// Logic


// get user value from input field

const form = document.querySelector('form');
let input = document.querySelector('#input');
let valueOfUser;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    valueOfUser = String(input.value);
    if (valueOfUser === '') {
        alert('Please enter your github username')
    }

    fetchData();
    showData();
    input.value = '';
    showModal();
})



// logic to fetch user data and show in the html page
let userData;
function fetchData() {
    const requestURL = `https://api.github.com/users/${valueOfUser}`;
    const xhr = new XMLHttpRequest;
    xhr.open('GET', requestURL);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            userData = JSON.parse(this.responseText)
            console.log(userData.avatar_url);
        }
    }
    xhr.send()
}


// showData
function showData() {
    let profileCard = document.querySelector('.profile-card')
    profileCard.innerHTML = 
    // `
    // <img class="profileImg" src="${userData.avatar_url}" alt="">
    // <p> <span>Name:</span> ${userData.name}</p>
    // `
        `
        <img class="profileImg" src="${userData.avatar_url}" alt="">
        <p> <span>Name:</span> ${userData.name}</p>    
        <p> <span>Username:</span> ${userData.login}</p>    
        <p> <span>Followers:</span> ${userData.followers}</p>    
        <p> <span>Following:</span> ${userData.following}</p>    
        <p> <span>Public Repository:</span> ${userData.public_repos}</p>    
        <p> <span>Created at:</span> ${userData.created_at}</p>    
        <p> <span>Updated at:</span> ${userData.updated_at}</p>    
        <p> <span>Bio:</span> ${userData.bio}</p>    
        <p> <span>Location:</span> ${userData.location}</p>    
        <p> <span>Twitter:</span> <a target='_blank' href="https://twitter.com/${userData.twitter_username}">${userData.twitter_username}</a></p>    
        <p> <span>Blog:</span> <a target='_blank' href="${userData.blog}">${userData.blog}</a></p>    
        <p> <span>Github Profile:</span> <a target='_blank' href="${userData.html_url}">${userData.html_url}</a></p> 
    `
}


// Logic to show modal when user clicks on profile image started

// function to show modal
function showModal() {
    // modal
    // select
    // card Img
    const profileImg = document.querySelector('.profileImg')
    // modal
    let modal = document.querySelector('.modal')
    
    // eventListener to show modal
    profileImg.addEventListener('click', () => {
        modal.style.zIndex = '1'
    })

    
    // modal innerHTML
    modal.innerHTML =
    `
    <div class="pop-up">
    <img class="modalImg" src="${userData.avatar_url}" alt="">
    <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>
    </div>
    `

    // cross button
    const crossIcon = document.querySelector('.fa-solid');
    // eventListener to close modal
    crossIcon.addEventListener('click', () => {
        modal.style.zIndex = '-1';
    })
}


// Logic to show modal when user clicks on profile image Ended


