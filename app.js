console.log('app loaded')


const animals = [
  {
    name: 'koko',
    hunger: 100,
    emoji : 'ðĶ',
    status: 'ð'
  }, 
  {
    name: 'brian',
    hunger: 5,
    emoji: 'ðŦ',
    status: 'ð'
  },
  {
    name: 'Maurice',
    hunger: 150,
    emoji: 'ðĶ§',
    status: 'ð'
  },
  {
    name: 'Sven',
    hunger: 100,
    emoji: 'ðĶ',
    status: 'ð'
  },
  {
    name: 'Rango',
    hunger: 100,
    emoji: 'ðĶ',
    status: 'ð'
  },
  {
    name: 'Jake',
    hunger: 100,
    emoji: 'ð',
    status: 'ð'
  },
  {
    name: 'Lich',
    hunger: 100,
    emoji: 'ð',
    status: 'ð'
  },
  {
    name: 'Lucy',
    hunger: 100,
    emoji: 'ðââŽ',
    status : 'ð'
  },
  {
    name: 'Dave',
    hunger: 100,
    emoji: 'ðĶĨ',
    status: 'ð'
  }
]

let money = 0

function feed(name){
  let animal = animals.find(a => a.name == name)
  if(animal.status != 'ðŠĶ'){
    animal.hunger += 5
    // NOTE clamp to 100
    if(animal.hunger > 100){
      animal.hunger = 100
    }
    // console.log('fed', animal.emoji, animal.hunger)
    updateAnimals()
  }
}

function hunger(){
  animals.forEach(a => {
    a.hunger -= 2
    // NOTE clamp to 0
    if(a.hunger < 0){
      a.hunger = 0
    }
  })
  updateAnimals()
}

function getPaid(){
  animals.forEach(a => {
    switch(a.status){
      case 'ð': money += 10
      break;
      case 'ð': money += 5
      break;
      case 'ð­': money += 2
      break;
      default: console.error('their dead jim.')
    }
  })
  document.getElementById('money').innerText = `$${money}`
  document.getElementById('cash-sound').play()
}

function randomSpeed(){
  return Math.round(Math.random()*50)
}

function updateAnimals(){
  animals.forEach(a => {
    // NOTE update animal status
    if(a.hunger > 51){
      a.status = 'ð'
    } else if (a.hunger > 21){
      a.status = 'ð'
    } else if (a.hunger > 0) {
      a.status = 'ð­'
    } else {
      a.status = 'ðŠĶ'
    }

    // NOTE drawing the update
    let animalPen = document.querySelector(`#${a.name}`)
    // console.log(animalPen);
    // @ts-ignore
    let stats = animalPen.querySelector('.stats')
    // console.log(stats);
    // @ts-ignore
    stats.innerText = `${a.name} | ${a.hunger} | ${a.status}`
    if(a.status == 'ðŠĶ'){
      // @ts-ignore
    let animal = animalPen.querySelector('.animal')
      animal.classList.add('dead')
      animalPen.querySelector('.mq1').stop()
      animalPen.querySelector('.mq2').stop()
    }
  })
}
// NOTE RIGHT WAY provide the INSTRUCTIONS of the function you want to run every interval
setInterval(hunger, 500)
// NOTE WRONG WAY this will call the function when the js hits the line, not on an interval
// setInterval(hunger(), 2000)

setInterval(getPaid, 10000)

updateAnimals()