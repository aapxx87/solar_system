btn_learn_more.addEventListener('click', function () {

  container_planet_and_orbit.style.display = 'none'

  container_planet_list.style.display = 'block'

})


btn_go_back.addEventListener('click', function () {

  container_planet_and_orbit.style.display = 'flex'

  container_planet_list.style.display = 'none'

})


btn_to_sandbox.addEventListener('click', function () {

  container_planet_list.style.display = 'none'

  container_sandbox_planet.style.display = 'block'

})


btn_from_sandbox_to_planet_list.addEventListener('click', function () {

  container_sandbox_planet.style.display = 'none'

  container_planet_list.style.display = 'block'

})