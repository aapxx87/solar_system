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
        <img class="planet_list_img planet_list_img_sandbox" src="${url}" alt="" id="planet_${idx}">
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


const check_pair = function (arr) {

  let id

  if (arr.length === 2 && arr[0]) {

    if (arr[0].includes('mercury') && arr[1] === '7') {
      console.log('🎆 place 1 = Mercury');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'



      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''


      match_answer_arr = []
    } else if (arr[0].includes('venus') && arr[1] === '6') {
      console.log('🎆  place 2 = Venus');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'

      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''

      match_answer_arr = []
    } else if (arr[0].includes('earth') && arr[1] === '5') {
      console.log('🎆  place 3 = Earth');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'

      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''

      match_answer_arr = []
    } else if (arr[0].includes('mars') && arr[1] === '4') {
      console.log('🎆  place 4 = Mars');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'

      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''

      match_answer_arr = []
    } else if (arr[0].includes('jupiter') && arr[1] === '3') {
      console.log('🎆  place 5 = Jupiter');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'

      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''

      match_answer_arr = []
    } else if (arr[0].includes('saturn') && arr[1] === '2') {
      console.log('🎆  place 6 = saturn');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'

      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''

      match_answer_arr = []
    } else if (arr[0].includes('uranus') && arr[1] === '1') {
      console.log('🎆  place 7 = Uranus');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'

      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''

      match_answer_arr = []
    } else if (arr[0].includes('neptune') && arr[1] === '0') {
      console.log('🎆  place 8 = Neptune');

      document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
      document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
      document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'

      planets_imgs.forEach(function (item) {

        if (item.src.includes(`${arr[0]}`)) {
          console.log(item.id);
          id = item.id
        }


      })

      document.getElementById(`${id}`).remove()

      id = ''

      match_answer_arr = []
    } else {
      console.log('❌ wrong answer');
      match_answer_arr = []
    }

  }

}



let img
let planet_place

let match_answer_arr = []


const find_clicked_img = function () {

  planets_imgs.forEach(function (item) {
    item.addEventListener('click', function () {
      let img = item.src

      match_answer_arr[0] = img

      // console.log(img);
      // console.log(match_answer_arr);

      check_pair(match_answer_arr)
    })
  })



}

find_clicked_img()



const highlight_target_place = function (id) {

  place_for_planets.forEach(function (item) {
    item.classList.remove('border')
  })

  document.getElementById(`${id}`).classList.add('border')

}





const find_planet_place = function () {

  place_for_planets.forEach(function (item) {
    item.addEventListener('click', function () {
      let planet_place = item.id

      match_answer_arr[1] = planet_place
      // console.log(planet_place);
      // console.log(match_answer_arr);
      check_pair(match_answer_arr)
      highlight_target_place(planet_place)
    })
  })


}

find_planet_place()











