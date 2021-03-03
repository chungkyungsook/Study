import React, { useEffect, useRef, useState } from 'react'

const CatMeme = () =>{

    const canvas = [useRef(null), useRef(null)]
    

    const WIDTH = 800 - 120, HEIGHT = 800 - 100, FPS = 10;
    const FILE_NUM = 6 ;
    
    const api = '54.144.186.21'

    const arr = []
    const [images, setImages] = useState('') //모든 이미지 저장

    useEffect(()=>{
        // canvas.push( document.useRef())

        for(let i = 0 ; i < FILE_NUM-4 ; i++) {
            for(let j = 0 ; j < FILE_NUM -4 ; j++) {
                const img = new Image() ;
                img.src = `http://${api}/api/help/image/${j + 1}` ;
                // img.src = 'https://thiscatdoesnotexist.com';
                arr.push(img)
            }
            
        }

        setImages(arr) // 모든 데이터 저장
    },[])

    

    // 사진 합쳐서 영상처럼 보여주기
    const replay = (index) =>{
        let count = 0;
        const ctx = canvas[index].current.getContext('2d')
        //배경 설정
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 700, 706 + 70 )

        const clearData = setInterval(() => { //일정한 시간 간격으로 작업을 수행하기 위해서 사용
            if(count === images.length) {  // 영상 없으면 멈춤
                clearInterval(clearData) ; // 반복을 멈추기 위해 
                return ; 
            }
            ctx.drawImage(images[count++], 10, 10, WIDTH, HEIGHT) ;
        }, 1000 / FPS) ; 
    }

    // 사진 합쳐서 영상처럼 보여주기
    const replay2 = () =>{
        
        let count = 0;
        const ctx = canvas[1].current.getContext('2d')
        //배경 설정
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 700, 706 + 70 )

        const clearData = setInterval(() => { //일정한 시간 간격으로 작업을 수행하기 위해서 사용
            if(count === images.length) {  // 영상 없으면 멈춤
                clearInterval(clearData) ; // 반복을 멈추기 위해 
                return ; 
            }
            ctx.drawImage(images[count++], 10, 10, WIDTH, HEIGHT) ;
        }, 1000 / FPS) ; 
    }

    return(
        <>
        {canvas && canvas.map((data,index) => (
            <>
            <h1>Cat Meme!</h1>
            <div>
                <canvas
                    ref={canvas[index]}
                    width={700}
                    height={706 + 70}
                />
            </div>

            <button onClick={() =>replay(index)}>재생</button>
            </>
        ))}
        
        </>
    )
}

export default CatMeme;
