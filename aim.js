document.addEventListener('DOMContentLoaded', () => {
    // console.log(target)

    var game = {
        target: document.getElementById('target'),
        info: document.getElementById('info'),
        nav: document.querySelector('#nav'),
        times: document.getElementById('times'),
        msg: '',
        time: 30,
        score: 0,
        playin: false,
        result: false,
        init() {
            // target.addEventListener('click', this.click)
            document.addEventListener('click', e => {
                if (e.target == this.target) {
                    this.click()
                } else if (this.playin) {
                    this.score--
                    this.msg = this.time + 's   ' + this.score
                    this.info.innerHTML = this.msg
                }
            })
        },
        timer() {
            setTimeout(() => {
                this.time--
                this.msg = this.time + 's   ' + this.score
                this.info.innerHTML = this.msg
                if (this.time <= 0) {
                    this.stop()
                } else {
                    this.timer()
                }
            }, 1000)
        },
        click() {
            if (this.result) return
            if (this.playin) {
                this.targetShot()
            } else {
                this.start()
            }
        },
        start() {
            document.body.style.backgroundColor = 'lightgray'
            this.playin = true
            this.info.innerHTML = 30
            this.times.style.display = 'none'
            this.nav.style.display = 'none'
            this.timer()
            this.targetShot()
        },
        stop() {
            this.nav.style.display = 'flex'
            document.body.style.backgroundColor = 'lightgreen'

            this.times.style.display = 'flex'
            this.times.innerHTML += '<p>' + this.score + '</p>'

            this.target.style.display = 'none'
            this.target.style.top = '50svh'
            this.target.style.left = '50svw'

            this.msg = this.score + ' targets hit !'
            this.info.innerHTML = this.msg
            this.result = true
            this.playin = false
            setTimeout(() => {
                this.time = 30
                this.score = 0
                this.target.style.display = 'block'
                this.result = false
            }, 2000)
        },
        targetShot() {
            if (this.result) return
            this.score++
            this.msg = this.time + 's   ' + this.score
            this.info.innerHTML = this.msg
            this.target.style.top = Math.floor(Math.random() * (92 - 1 + 1) + 1) + 'svh'
            this.target.style.left = Math.floor(Math.random() * (92 - 1 + 1) + 1) + 'svw'
        }
    }
    game.init()



})