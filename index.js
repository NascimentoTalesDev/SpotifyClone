const body = document.querySelector('body')
body.style.overflowX = "hidden"

function init() {

    creatTitle
    creatHtml.criar()
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


    for (let index = 0; index < arrayAudios[0].length; index++) {

        arrayAudios.forEach((audio) => {
            const button = document.createElement('button')
            button.classList.add('button')
            button.innerHTML = `${audio[index]} <br> ${singerName[0].innerHTML}`
            button.id = audio[index]
            containerMusicsElement.appendChild(button)
            let music = document.getElementById(audio[index]);
            music.classList.add('allMusics')  
            button.addEventListener("click", () =>{
                stopMusics();
                music.play()

            })
            
        });
    }
    
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
    
    playBtn.addEventListener('click', () => {
        stopMusics();
        let allMusics = document.querySelectorAll('.allMusics')
        start(allMusics)
    })

    down.addEventListener('click', () => {
        containerCdElement.classList.add('close')
    })       

    up.addEventListener('click', () => {
        containerCdElement.classList.remove('close')
    })
}

function stopMusics() {
    let audios = document.querySelectorAll('audio')
    audios.forEach(audio=>{
        audio.pause()
        audio.currentTime = 0
    })
}

function start(allMusics) {

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

