const planets_img_adresses = ['images/Planets/mercury.png', 'images/Planets/venus.png', 'images/Planets/earth.png', 'images/Planets/mars.png', 'images/Planets/jupiter.png', 'images/Planets/saturn.png', 'images/Planets/uranus.png', 'images/Planets/neptune.png']


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]]; // обмен элементами местами
  }
  return array;
}





// ? Добавляем изображение планеты на место, которое указано правильно для ее размещения
const add_img_to_right_place = function (arr) {
  document.getElementById(`${arr[1]}`).style.background = `url('${arr[0]}')`
  document.getElementById(`${arr[1]}`).style.backgroundSize = 'cover'
  document.getElementById(`${arr[1]}`).style.backgroundPosition = 'bottom'
}





// ? Удаляем изображение планеты с левой части, когда правильно выбрали место, где она должн анаходиться и она переместилась туда
const remove_planet_img_from_left_side = function (arr) {

  planets_imgs.forEach(function (item) {

    if (item.src.includes(`${arr[0]}`)) {
      id = item.id
    }

  })

  document.getElementById(`${id}`).remove()

  id = ''

}


// ? Удаление бордеров выделения со всех мест для определения планеты
const delete_border_from_place = function () {
  place_for_planets.forEach(function (item) {
    item.classList.remove('border')
  })
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

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []

    } else if (arr[0].includes('venus') && arr[1] === '6') {

      console.log('🎆  place 2 = Venus');

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []
    } else if (arr[0].includes('earth') && arr[1] === '5') {
      console.log('🎆  place 3 = Earth');

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []
    } else if (arr[0].includes('mars') && arr[1] === '4') {
      console.log('🎆  place 4 = Mars');

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []
    } else if (arr[0].includes('jupiter') && arr[1] === '3') {
      console.log('🎆  place 5 = Jupiter');

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []
    } else if (arr[0].includes('saturn') && arr[1] === '2') {
      console.log('🎆  place 6 = saturn');

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []
    } else if (arr[0].includes('uranus') && arr[1] === '1') {
      console.log('🎆  place 7 = Uranus');

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []
    } else if (arr[0].includes('neptune') && arr[1] === '0') {
      console.log('🎆  place 8 = Neptune');

      add_img_to_right_place(match_answer_arr)
      remove_planet_img_from_left_side(match_answer_arr)
      delete_border_from_place()

      match_answer_arr = []
    } else {
      console.log('❌ wrong answer');
      delete_border_from_place()
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

      check_pair(match_answer_arr)
    })
  })

}

find_clicked_img()



const highlight_target_place = function (id) {
  delete_border_from_place()
  document.getElementById(`${id}`).classList.add('border')
}





const find_planet_place = function () {

  place_for_planets.forEach(function (item) {

    item.addEventListener('click', function () {
      let planet_place = item.id
      match_answer_arr[1] = planet_place
      highlight_target_place(planet_place)
      check_pair(match_answer_arr)
    })

  })

}

find_planet_place()











