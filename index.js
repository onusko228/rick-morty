// const btn = document.querySelector(".btn")
// const userList = document.querySelector(".user__list")
// function fetchUsers() {
//   return fetch("https://rickandmortyapi.com/api/character").then(
//     (response) => {
//       return response.json();
//     }
//   )
// }

// const renderUsers = (users) => {
//   const marcup = users
//   .map((user) => {
//     const { name,email,website} = user;
//     return `
//     <li>
//     <p>Name: ${name}</p>
//     <p>Email: ${email}</p>
//     <p>Website: ${website}</p>
//     </li>
//     `;
//   })
//   .join("");
//   userList.innerHTML = marcup;  
// };

// .btn.addEventListener("click",()=>
// {
//   fetchUsers()
//   .then((users) => renderUsers(users))
//   .catch((error) => console.log(error));
// })


const characterList = document.querySelector(".character__list");

function fetchUsers() {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            characters.forEach(character => {
                const characterElement = document.createElement("div");
                characterElement.classList.add("character");
                characterElement.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p>Status: ${character.status}</p>
                    <p>Species: ${character.species}</p>
                    <p>Gender: ${character.gender}</p>
                `;
                characterList.appendChild(characterElement);
            });
        })
        .catch(error => console.error("Error fetching characters:", error));
}

fetchUsers();