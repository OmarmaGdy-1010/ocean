// display list
let listicon = document.getElementById("list");
let list = document.querySelector(".list");
let postSection = document.querySelector(".posts");
let listT = 0;
list.style.display = "none";
listicon.addEventListener("click", () => {
    listT++;
    if (listT % 2 != 0) {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});




async function posts_API(id) {
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    let x = await fetch(url);
    let y = await x.json();

    show_posts(y);
}

function show_posts(arr) {
    postSection.innerHTML = ""
    for (let i = 0; i < arr.length; i++){
        postSection.innerHTML += `
        <div class="post">
                <h3>${arr[ i ].title}</h3>
                <p>${arr[ i ].body}</p>
            </div>
    `;
}
}

// length






async function users_API() {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let x = await fetch(url);
    let y = await x.json();
    show_Users(y)
}

users_API()


function show_Users(arr) {
    list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += `
            <h4 id="${arr[ i ].id}">${arr[ i ].name}</h4>
    `;
    }
    let users = document.querySelectorAll('.list h4')
    users.forEach(user => {
        user.addEventListener('click', () => {
            if (document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active')
            }
            user.classList.add('active')
            posts_API(user.id)
            listicon.click()
        })
    });
}


posts_API(5)




















// getData("users");
// function getUsrelist(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         list.innerHTML += `
//         <h4 id="${arr[ i ].id}" >${arr[ i ].name}</h4>
//         `;
//     }
// }

