const main = document.querySelector('#main');

window.addEventListener('DOMContentLoaded', async(event) => {
    const res = await fetch("https://swapi.dev/api/people");
    const data = await res.json();
    // console.log(data);
    for (let i = 0; i < data.results.length; i++){
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src='../images/matthew-ball-qwyrfrfCd6w-unsplash.jpg';

        const avatar = document.createElement('h4');
        avatar.textContent = data.results[i].name;
        avatar.className = 'text-center';

        const height = document.createElement('h5');
        height.textContent = data.results[i].height;
        height.className = 'text-center';

        const avatarGender = document.createElement('h5');
        avatarGender.textContent = data.results[i].gender;
        avatarGender.className = 'text-center';
        

        //Creating a click Eventlistener on avatar
        // const handleClick = avatar.document.querySelector();
        // handleClick.addEventListener('click', () => {

        // });
       //appending elements

        main.appendChild(div);
        div.appendChild(img);
        div.appendChild(avatar);
        div.appendChild(height);
        div.appendChild(avatarGender);
    }
})