const planets_img_adresses = ['images/Planets/mercury.png', 'images/Planets/venus.png', 'images/Planets/earth.png', 'images/Planets/mars.png', 'images/Planets/jupiter.png', 'images/Planets/saturn.png', 'images/Planets/uranus.png', 'images/Planets/neptune.png']


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]]; // обмен элементами местами
  }
  return array;
}



const create_html_sanbox_list = function () {


  shuffleArray(planets_img_adresses).forEach(function (url, idx) {

    const html = `
    <div class="planet-item_sandbox">

      <div class="planet_sandbox_img">
        <img class="planet_list_img planet_list_img_sandbox" src="${url}" alt="">
      </div>

      <div class="planet_sandbox_target_place">
        <div class="place_for_planet" id="${idx}"></div>
      </div>

    </div>
    `

    sandbox_planet_list.insertAdjacentHTML("afterbegin", html)

  })

}


create_html_sanbox_list()


const planets_imgs = document.querySelectorAll('.planet_list_img_sandbox')
const place_for_planets = document.querySelectorAll('.place_for_planet')

let img
let planet_place


const find_clicked_img = function () {

  planets_imgs.forEach(function (item) {
    item.addEventListener('click', function () {
      let img = item.src
      console.log(img);
    })
  })



}

find_clicked_img()



const find_planet_place = function () {

  place_for_planets.forEach(function (item) {
    item.addEventListener('click', function () {
      let planet_place = item.id
      console.log(planet_place);
    })
  })


}


find_planet_place()




