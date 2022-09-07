const body = document.querySelector('body')
body.style.overflowX = "hidden"

init()

function init() {

    creatTitle()
}
function creatTitle() {

    const containerTitle = document.createElement('div')
    containerTitle.classList.add('title')
    const h1 = document.createElement('h1')

    const containerfigure = document.createElement('div')
    containerfigure.classList.add('figure')

    const sino = document.createElement('i')
    sino.classList.add('fas')
    sino.classList.add('fa-bell')

    const time = document.createElement('i')
    time.classList.add('fas')
    time.classList.add('fa-clock')

    const config = document.createElement('i')
    config.classList.add('fas')
    config.classList.add('fa-gear')
    
    h1.classList.add('h1')
    h1.innerHTML = "Spotify"

    body.appendChild(containerTitle)
    containerTitle.appendChild(h1)
    containerTitle.appendChild(containerfigure)

    containerfigure.appendChild(sino)
    containerfigure.appendChild(time)
    containerfigure.appendChild(config)

    creatHtml()
}

function creatHtml() {
    
    for (let index = 0; index < datas.length; index++) {
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const containerStyleElement = document.createElement('div')
        containerStyleElement.classList.add('styleContainer')

        const h2Element = document.createElement('h2')
        h2Element.classList.add('style')
        h2Element.innerHTML = datas[index].style

        const collectionElement = document.createElement('div')
        collectionElement.classList.add('collection')
    
        datas[index].songs.forEach(song => {

            const cdElementPai = document.createElement('div')
            cdElementPai.classList.add('cdPai')

            const cdElement = document.createElement('div')
            cdElement.classList.add('cd')

            const containerPaiSinger = document.createElement('div')
            containerPaiSinger.classList.add('paiSinger')

            const imgElement = document.createElement('img')
            imgElement.classList.add('image')
            imgElement.src = song["thumb"]

            const h3Element = document.createElement('h3')
            h3Element.classList.add('singer')
            h3Element.innerHTML = song["cantor"] 

            const pElement = document.createElement('p')
            pElement.classList.add('play')
            pElement.innerHTML = song["play"] 

            const musica = document.createElement('input')
            musica.classList.add('musics')
            musica.value = song["musicas"];

            collectionElement.appendChild(cdElementPai);
            cdElementPai.appendChild(cdElement)
            cdElement.appendChild(imgElement)
            
            cdElement.appendChild(containerPaiSinger)
            containerPaiSinger.appendChild(pElement)
            containerPaiSinger.appendChild(h3Element)
            containerPaiSinger.appendChild(musica)

        })

        body.appendChild(containerElement)
        containerElement.appendChild(containerStyleElement)
        containerElement.appendChild(collectionElement)                
                
        containerStyleElement.appendChild(h2Element)
    }

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
            
            button.addEventListener("click", () =>{
                let play = document.getElementById(audio[index]);
                let currentIndex = index    
                stopMusics();
                play.play()

                play.addEventListener('ended', () => {
                    currentIndex++
                    if (currentIndex >= audio.length) {
                        stopMusics();
                    } else {
                        let play = document.getElementById(audio[currentIndex]);
                        stopMusics();
                        play.play()
                    }
                })
            })
            function stopMusics() {
                let audios = document.querySelectorAll('audio')
                audios.forEach(audio=>{
                    audio.pause()
                    audio.currentTime = 0
                })
            }
        });
    }
    
    body.appendChild(containerCdElement)
    containerCdElement.appendChild(down)
    containerCdElement.appendChild(up)
    containerCdElement.appendChild(containerImagem)
    containerImagem.appendChild(image)
    containerCdElement.appendChild(containerMusicsElement)   
    
    down.addEventListener('click', () => {
        containerCdElement.classList.add('close')
    })       

    up.addEventListener('click', () => {
        containerCdElement.classList.remove('close')
    })
}

let search = document.getElementById('search')
search.addEventListener('click', () => {
    let searchContainer = document.querySelector('.search')
    console.log(searchContainer);
    searchContainer.classList.toggle('on')
})

