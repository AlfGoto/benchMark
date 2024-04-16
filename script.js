document.addEventListener('DOMContentLoaded', () => {

    var button = {
        dom: document.querySelector('#button'),
        playin: false,
        reflexin: false,
        iter: 0,
        init: function () {
            console.log(this.dom)
            document.addEventListener('pointerdown', () => {
                if(this.reflexin){
                    this.dom.innerHTML = 'Restart'
                    document.body.style.backgroundColor = 'purple'
                    this.playin = false
                    this.reflexin = false
                }else if (this.playin) {
                    this.dom.innerHTML = 'Restart'
                    document.body.style.backgroundColor = 'green'
                    document.getElementById('times').innerHTML += "<p>" + (Date.now() - this.start) + 'ms' + "</p>"
                    document.getElementById('time').innerHTML = (Date.now() - this.start) + 'ms'
                    this.playin = false
                } else {
                    this.iter++
                    let it = this.iter
                    this.playin = true
                    this.reflexin = true
                    this.dom.innerHTML = 'Ready ?'
                    document.body.style.backgroundColor = 'lightgray'
                    setTimeout(() => {
                        if(it != this.iter) return
                        if(this.playin == false)return
                        this.start = Date.now()
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