const body = document.querySelector('body')
// body.style.overflowX = "hidden"

window.addEventListener('load',init())
var a = []

function init() {

    creatTitle()
    creatHtml.criar()
    chooseMusic()

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
function stopMusics() {
    let audios = document.querySelectorAll('audio')
    audios.forEach(audio=>{
        audio.pause()
        audio.currentTime = 0
    })
}
function prox(currentAudio, audios) {
    console.log(currentAudio, audios);
    currentAudio++
    if (currentAudio > audios.length) {
        stopMusics()
    } else {
        let musica = audios[currentAudio]
        musica.play()
        musica.addEventListener('ended',()=>{
            prox(currentAudio,audios)
        })
    }
}
function tocar(allMusics) {

    let audios = allMusics
    let currentAudio = 0
    
    let musica = audios[currentAudio]

    musica.play()
    musica.addEventListener('ended',()=>{
        prox(currentAudio,audios)
    })
}

function playCd(openCd) {
    
    if (window.document.querySelector('.close')) {
        let rem = document.querySelector('div.close')
        rem.remove()
        stopMusics()
    }
    window.document.body.style.overflowY = 'hidden'
    
    let imagemCd = openCd[2].querySelector('img').src
    
    let audio = openCd[2].querySelector('input').value
    let singerName = openCd[2].querySelectorAll('.singer')
    
    let arrayAudios = []
    arrayAudios.push(audio.split(","))

    const containerCdElement = document.createElement('div')
    containerCdElement.classList.add('containerCd')
    
    const containerCdBackGround = document.createElement('div')
    containerCdBackGround.classList.add('containerCdBackGround')

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
            const section = document.createElement('section')
            section.classList.add('section')

            const capa = document.createElement('img')
            capa.classList.add('capa')

            const div = document.createElement('div')
            div.classList.add('div')

            const h2 = document.createElement('h2')
            h2.classList.add('h2')

            const singer = document.createElement('h3')
            singer.classList.add('singer')

            capa.src = imagemCd

            h2.innerHTML = audio[index]
            singer.innerHTML = singerName[0].innerHTML

            h2.id = audio[index]

            const div2 = document.createElement('div')
            div2.classList.add('div2')

            const like = document.createElement('i')
            like.classList.add('fa-regular')
            like.classList.add('fa-heart')

            const like2 = document.createElement('i')
            like2.innerHTML = '<i class="fas fa-circle-minus"></i>'
            
            const like3 = document.createElement('i')
            like3.innerHTML = '<i class="fas fa-ellipsis-vertical"></i>'
   
            div.appendChild(h2)
            div.appendChild(singer)
                     
            div2.appendChild(like)
            div2.appendChild(like2)
            div2.appendChild(like3)

            section.appendChild(capa)
            section.appendChild(div)
            section.appendChild(div2)
            containerMusicsElement.appendChild(section)

            let music = document.getElementById(audio[index]);
            allMusics.push(music)
            // let audios = allMusics
            // let currentAudio = h2
            section.addEventListener("click", () =>{
                stopMusics();
                music.play()
                music.addEventListener('ended', prox())
            })
            
        });
    }
    
    body.appendChild(containerCdElement)

    containerCdElement.appendChild(containerCdBackGround)
    containerCdBackGround.appendChild(down)
    containerCdBackGround.appendChild(up)
    containerCdBackGround.appendChild(containerImagem)
    
    controlsItens.appendChild(prev)
    controlsItens.appendChild(pause)
    controlsItens.appendChild(playBtn)
    controlsItens.appendChild(next)

    
    containerCdBackGround.appendChild(containerControls)
    containerControls.appendChild(controlsItens)
    containerImagem.appendChild(image)
    containerCdElement.appendChild(containerMusicsElement)
    containerCdBackGround.style.backgroundImage = `url('${imagemCd}')`;
           
    down.addEventListener('click', () => {
        containerCdElement.classList.add('close')
        window.document.body.style.overflowY = 'scroll'
    })       
    
    up.addEventListener('click', () => {
        containerCdElement.classList.remove('close')
    })

    playBtn.addEventListener('click', () => {
        stopMusics();
        tocar(allMusics)
    })

    tocar(allMusics)
}

let search = document.getElementById('search')
search.addEventListener('click', () => {
    let searchContainer = document.querySelector('.search')
    // console.log(searchContainer);
    searchContainer.classList.toggle('on')
})

