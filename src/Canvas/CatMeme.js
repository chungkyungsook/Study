import React, { useEffect, useRef, useState } from 'react'

const CatMeme = () =>{

    const [image, setImage] = useState(null)
    const canvas = useRef(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
        
    useEffect(()=>{
        const catImage = new Image();
        catImage.src = 'https://thiscatdoesnotexist.com'
        catImage.onload = () => setImage(catImage) // 처음 로딩 할때 그림 넣기
    },[])
    
    useEffect(()=>{
    
        if(image && canvas){
            const num = 20
            const ctx = canvas.current.getContext('2d')
            //배경 설정
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, 700, 706 + 70 )

            // 배경 안 희색 배경
            ctx.fillStyle = 'white'
            ctx.fillRect(60, 60, 700 - 130, 606 + 50 )
            ctx.drawImage(image, (400 - 230) /2, 80)

            //폰트 설정
            ctx.font = '20px Comic Sans MS '
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'
            //위치 설정
            ctx.fillText(topText, (700 /2), 45)

            //위와 이하동문
            ctx.font = '22px Comic Sans MS '
            ctx.fillStyle = 'black'
            ctx.fillText(bottomText, (700 / 2), 600 + 40 + 25)

            ctx.beginPath();
            ctx.fillStyle = 'white'
            ctx.moveTo(75, 40);
            ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
            ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
            ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
            ctx.fill();
        }
    },[image, canvas,topText, bottomText])

    //해당 사진 캡처해서 반환
    const startRecording = (e)=>{

        
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
            <button onClick={startRecording}>다운로드</button>
        </>
    )
}

export default CatMeme;
