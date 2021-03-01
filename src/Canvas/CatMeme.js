import React, { useEffect, useRef, useState } from 'react'

const CatMeme = () =>{

    const [image, setImage] = useState(null)
    const canvas = useRef(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
        
    const WIDTH = 800 - 120, HEIGHT = 800 - 100, FPS = 2;
    const FILE_NUM = 6 ;
    
    // 사진, 영상 변수
    let videoRecord ;
    const api = '54.163.128.160'

    const img1 = new Image() ;
    img1.src = `http://${api}/api/help/image/1` ;

    const img2 = new Image() ;
    img2.src = `http://${api}/api/help/image/1` ;
    
    const img3 = new Image() ;
    img3.src = `http://${api}/api/compost/1` ;

    const arr = [ img1, img2, img3 ]  ;
    const [images, setImages] = useState('') //모든 이미지 저장

    useEffect(()=>{
        

        for(let i = 0 ; i < FILE_NUM ; i++) {
            for(let j = 0 ; j < FILE_NUM -4 ; j++) {
                const img = new Image() ;
                img.src = `http://${api}/api/help/image/${j + 1}` ;
                arr.push(img)
            }
        }

        setImages(arr) // 모든 데이터 저장

        // const catImage = new Image();
        // catImage.src = 'https://thiscatdoesnotexist.com'
        // catImage.onload = () => setImage(catImage) // 처음 로딩 할때 그림 넣기
        const ctx = canvas.current.getContext('2d')
        //배경 설정
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 700, 706 + 70 )
    },[])


    // // let [count, setCount] = useState(0) ;
    // useEffect(()=>{


    //     if(images && canvas ){
    //         const ctx = canvas.current.getContext('2d')
    //         //배경 설정
    //         ctx.fillStyle = 'black'
    //         ctx.fillRect(0, 0, 700, 706 + 70 )
    //     }
        

    // },[images, canvas,topText, bottomText])

    // 사진 합쳐서 영상처럼 보여주기
    const replay = () =>{
        let count = 0;
        const ctx = canvas.current.getContext('2d')
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
            <h1>Cat Meme!</h1>
            <div>
                <canvas
                    ref={canvas}
                    width={700}
                    height={706 + 70}
                />
            </div>

            <div>
                <span>제목 : </span>
                <input text = 'text'
                    value={topText}
                    onChange = {e => setTopText(e.target.value)}
                />
            </div>
            <div>
            <span>내용 : </span>
                <input text = 'text'
                    value={bottomText}
                    onChange = {e => setBottomText(e.target.value)}
                />
            </div>
            <button onClick={replay}>재생</button>
        </>
    )
}

export default CatMeme;
