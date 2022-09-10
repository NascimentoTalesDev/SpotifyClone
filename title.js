const creatTitle = {
    containerTitle : document.createElement('div'),
    h1 : document.createElement('h1'),

    containerfigure : document.createElement('div'),
    sino : document.createElement('i'),
    time : document.createElement('i'),
    config : document.createElement('i'),

    
    
    incluindo(){
        this.containerTitle.classList.add('title'),
        
        this.h1.innerHTML = "Spotify",
        this.h1.classList.add('h1'),
        
        this.containerfigure.classList.add('figure'),
        
        this.sino.classList.add('fas'),
        this.sino.classList.add('fa-bell'),
        this.time.classList.add('fas'),
        this.time.classList.add('fa-clock'),
        this.config.classList.add('fas'),
        this.config.classList.add('fa-gear'),

        this.body.appendChild(containerTitle)
        this.containerTitle.appendChild(h1)
        this.containerTitle.appendChild(containerfigure)
        this.containerfigure.appendChild(sino)
        this.containerfigure.appendChild(time)
        this.containerfigure.appendChild(config)
    }    

}  