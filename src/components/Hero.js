import React from 'react';

export function Hero(){
    return(
        <main className='w-100 p-3 p-sm-5 d-flex align-items-center justify-content-center hero' id="home">

            <div className="w-75 rounded border-none p-2 p-sm-5 m-0 mt-5 hero__box">
                <h1 className='w-50 m-auto text-center'>About Me</h1>
                <figure className='w-50 m-auto'>
                    <img className="w-100" src="" alt="picture of developer"/>
                </figure>
            </div>

        </main>
    )
}