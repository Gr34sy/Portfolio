import React from 'react';

export function Hero(){
    return(
        <main className='w-100 p-3 p-sm-5 d-flex align-items-center justify-content-center hero' id="home">

            <div className="w-75 rounded border-none p-2 p-sm-5 m-0 mt-5 hero__box">
                <h1 className='w-50 m-auto text-center'>About Me</h1>
                <figure className='w-50 m-auto mb-2'>
                    <img className="w-100" src="" alt="picture of developer"/>
                </figure>
                <p className='p-2 m-0'>
                    Hi, my name is Peter. I'm currently studying IT in Wrocław. Since high school I've been passionate about web development. I enjoy learning new techniques and acquiring programming skills. I also put big effort on self-improvement. Constructive criticism is important for me, because I can learn a lot from my mistakes.
                </p>
                <p className='p-2 m-0'>
                    I'm quite social person despite being programmer. Spending time with different people and speaking to them is crucial part of my life. I'm interested in football, basketball and esports. Aditionally I love reading books no matter what type they are.
                </p>
            </div>

        </main>
    )
}