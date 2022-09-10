const body = document.querySelector('body')
body.style.overflowX = "hidden"

window.addEventListener('load',init())
var a = []

function init() {

    creatTitle()
    creatHtml.criar()
}

function creatTitle () {
    let containerTitle = document.createElement('div')
    let h1 = document.createElement('h1')
    let containerfigure = document.createElement('div')
    let sino = document.createElement('i')
    let time = document.createElement('i')
    let config = document.createElement('i')

    containerTitle.classList.add('title'),
    
    h1.innerHTML = "Spotify",
    h1.classList.add('h1'),
    
    containerfigure.classList.add('figure'),
    
    sino.classList.add('fas'),
    sino.classList.add('fa-bell'),
    time.classList.add('fas'),
    time.classList.add('fa-clock'),
    config.classList.add('fas'),
    config.classList.add('fa-gear'),
    body.appendChild(containerTitle)
    containerTitle.appendChild(h1)
    containerTitle.appendChild(containerfigure)
    containerfigure.appendChild(sino)
    containerfigure.appendChild(time)
    containerfigure.appendChild(config)

    chooseMusic()

}  

function chooseMusic() {
    
    let cds = document.querySelectorAll('.play')
    
    cds.forEach(cd => {
        cd.addEventListener('click', (e) =>{
            let openCd = e.composedPath();
            playCd(openCd)
        } )
    })
}

function playCd(openCd) {
    stopMusics()
    start(openCd)  
}

function stopMusics() {
    let audios = document.querySelectorAll('audio')
    audios.forEach(audio=>{
        audio.pause()
        audio.currentTime = 0
    })
}

function start(openCd) {
    
    let imagemCd = openCd[2].querySelector('img').src
    
    let audio = openCd[2].querySelector('input').value
    let singerName = openCd[2].querySelectorAll('.singer')
    
    let arrayAudios = []
    arrayAudios.push(audio.split(","))

    const containerCdElement = document.createElement('div')
    containerCdElement.classList.add('containerCd')
    
    const down = document.createElement('i')
    down.classList.add('fas')
    down.classList.add('fa-chevron-down')

    const up = document.createElement('i')
    up.classList.add('fas')
    up.classList.add('fa-chevron-up')

    const containerControls = document.createElement('div')
    containerControls.classList.add('containerControls')

    const controlsItens = document.createElement('div')
    controlsItens.classList.add('controlsItens')

    const prev = document.createElement('i')
    prev.classList.add('fas')
    prev.classList.add('fa-chevron-left')

    const playBtn = document.createElement('i')
    playBtn.classList.add('fas')
    playBtn.classList.add('fa-play')

    const pause = document.createElement('i')
    pause.classList.add('fas')
    pause.classList.add('fa-pause')

    const next = document.createElement('i')
    next.classList.add('fas')
    next.classList.add('fa-chevron-right')

    const containerImagem = document.createElement('div')
    containerImagem.classList.add('image')
    
    const image = document.createElement('img')
    image.classList.add('img')
    image.src = imagemCd

    const containerMusicsElement = document.createElement('div')
    containerMusicsElement.classList.add('containerMusics')

    let allMusics = []

    for (let index = 0; index < arrayAudios[0].length; index++) {

        arrayAudios.forEach((audio) => {
            const button = document.createElement('button')
            button.classList.add('button')
            button.innerHTML = `${audio[index]} <br> ${singerName[0].innerHTML}`
            button.id = audio[index]
            containerMusicsElement.appendChild(button)

            let music = document.getElementById(audio[index]);
            allMusics.push(music)
            
            
            button.addEventListener("click", () =>{
                stopMusics();
                music.play()
                
            })
            
        });
        
        
    }
    
    console.log(containerMusicsElement.id);
    body.appendChild(containerCdElement)
    containerCdElement.appendChild(down)
    containerCdElement.appendChild(up)
    containerCdElement.appendChild(containerImagem)
    controlsItens.appendChild(prev)
    controlsItens.appendChild(pause)
    controlsItens.appendChild(playBtn)
    controlsItens.appendChild(next)
    
    containerControls.appendChild(controlsItens)
    containerCdElement.appendChild(containerControls)
    containerImagem.appendChild(image)
    containerCdElement.appendChild(containerMusicsElement)   
    
    
    
    down.addEventListener('click', () => {
        containerCdElement.classList.add('close')
    })       
    
    up.addEventListener('click', () => {
        containerCdElement.classList.remove('close')
    })
    playBtn.addEventListener('click', () => {
        stopMusics();
    
        art(allMusics)
    })
        
        
    // art(allMusics);
}

function art(allMusics) {

    let audios = allMusics
    let currentAudio = 0
    
    let musica = audios[currentAudio]

    musica.play()
    musica.addEventListener('ended',()=>{
        console.log('acabou',musica);
        next(currentAudio,audios)
    })
}

function next(currentAudio, audios) {
    currentAudio++
    if (currentAudio > audios.length) {
        console.log('acabaram as músicas');
        stopMusics()
    } else {
        let musica = audios[currentAudio]
        musica.play()
        musica.addEventListener('ended',()=>{
            next(currentAudio,audios)
        })
    }
    
}

let search = document.getElementById('search')
search.addEventListener('click', () => {
    let searchContainer = document.querySelector('.search')
    // console.log(searchContainer);
    searchContainer.classList.toggle('on')
})

