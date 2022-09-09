const creatHtml =  {
    
    criar(){
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
    }    
}