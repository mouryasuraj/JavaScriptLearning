// Logic


// get user value from input field

const form = document.querySelector('form');
let input = document.querySelector('#input');
let valueOfUser;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    valueOfUser = String(input.value);
    if (valueOfUser === '') {
        return alert('Please enter your github username')
    }
    fetchData();
})




// logic to fetch user data and show in the html page
let userData;
let createdAtdate;
let updatedAtdate;
function fetchData() {
    const requestURL = `https://api.github.com/users/${valueOfUser}`;
    const xhr =  new XMLHttpRequest;
    xhr.open('GET', requestURL);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            userData = JSON.parse(this.responseText)
            if(userData.message === 'Not Found'){
                return alert('User is not found.')
            }
        }
    }
    xhr.send()
    createdAtdate = new Date(userData.created_at).toLocaleDateString();
    updatedAtdate = new Date(userData.updated_at).toLocaleDateString();
    input.value = '';
    showData();
}


// showData
function showData() {
    let profileCard = document.querySelector('.profile-card')
    profileCard.innerHTML =
        `
        <img class="profileImg" src="${userData.avatar_url}" alt="">
        <p> <span>Name:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.name}</p>    
        <p> <span>Username:</span> ${userData.message === 'Not Found' ? 'Not found' :userData.login}</p>    
        <p> <span>Followers:</span> ${userData.message === 'Not Found' ? 'Not found' :userData.followers}</p>    
        <p> <span>Following:</span> ${userData.message === 'Not Found' ? 'Not found' :userData.following}</p>    
        <p> <span>Public Repository:</span> ${userData.message === 'Not Found' ? 'Not found' :userData.public_repos}</p>    
        <p> <span>Created at:</span> ${userData.message === 'Not Found' ? 'Not found' :createdAtdate}</p>    
        <p> <span>Updated at:</span> ${userData.message === 'Not Found' ? 'Not found' :updatedAtdate}</p>    
        <p> <span>Bio:</span> ${userData.message === 'Not Found' ? 'Not found' :userData.bio}</p>    
        <p> <span>Location:</span> ${userData.message === 'Not Found' ? 'Not found' :userData.location}</p>    
        <p> <span>Twitter:</span> <a target='_blank' href="https://twitter.com/${userData.twitter_username}">${userData.twitter_username}</a></p>    
        <p> <span>Blog:</span> <a target='_blank' href="${userData.message === 'Not Found' ? 'Not found' :userData.blog}">${userData.blog}</a></p>    
        <p> <span>Github Profile:</span> <a target='_blank' href="${userData.html_url}">${userData.html_url}</a></p> 
        `


    // Logic to show modal when user clicks on profile image

    // card Img
    const profileImg = document.querySelector('.profileImg')
    // modal
    let modal = document.querySelector('.modal')

    
    // modal innerHTML
    modal.innerHTML =
    `
    <div class="pop-up">
    <img class="modalImg" src="${userData.avatar_url}" alt="">
    <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>
    </div>
    `
    userData = {};
    
    // eventListener to show modal
    profileImg.addEventListener('click', () => {
        modal.style.zIndex = '1'
    })
    // cross button
    const crossIcon = document.querySelector('.fa-solid');
    // eventListener to close modal
    crossIcon.addEventListener('click', () => {
        modal.style.zIndex = '-1';
    })
}








