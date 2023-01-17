
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    let road = new Image()
    road.src = "/images/road.png"
    let car = new Image()
    car.src = "/images/car.png"

    road.onload = function() {
      ctx.drawImage(road, 0, 0, 500, 700)
    }
    car.onload = function() {
      ctx.drawImage(car,220,550,60,100)
    }

  }

}   
  
    

  

