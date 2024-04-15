document.addEventListener('DOMContentLoaded', () => {
    
    var time = 0
    class timerClass {
        constructor() {
            this.elem = document.querySelector('#time')
        }
        intervalFunction() {
            time++
            // console.log(this.elem)
            document.getElementById('time').innerHTML = time + 'ms'
        }
        start() {
            this.interval = setInterval(this.intervalFunction, 1)
        }
        stop() {
            clearInterval(this.interval)
        }
        reset() {
            time = 0
        }
    }
    var timer = new timerClass()
    console.log(timer)



    var button = {
        dom: document.querySelector('#button'),
        playin: false,
        reflexin: false,
        iter: 0,
        init: function () {
            console.log(this.dom)
            document.addEventListener('click', () => {
                if(this.reflexin){
                    this.dom.innerHTML = 'Restart'
                    document.body.style.backgroundColor = 'purple'
                    timer.stop()
                    this.playin = false
                    this.reflexin = false
                }else if (this.playin) {
                    this.dom.innerHTML = 'Restart'
                    document.body.style.backgroundColor = 'green'
                    document.getElementById('times').innerHTML += "<p>" + time + "ms" + "</p>"
                    timer.stop()
                    this.playin = false
                } else {
                    this.iter++
                    let it = this.iter
                    this.playin = true
                    this.reflexin = true
                    this.dom.innerHTML = 'Ready ?'
                    timer.reset()
                    document.body.style.backgroundColor = 'lightgray'
                    setTimeout(() => {
                        if(it != this.iter) return
                        if(this.playin == false)return
                        this.dom.innerHTML = 'Click !'
                        this.reflexin = false
                        document.body.style.backgroundColor = 'red'
                        this.playin = true
                        timer.start()
                    }, Math.random() * 5000 + 1500)
                }
            })
        }
    }
    button.init()





})