import React from 'react';

const Top_Section = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-2 py-3 px-4 sm:px-6 lg:px-28 bg-white'>
                <p className='text-sm sm:text-base text-[#838383] text-center sm:text-left'>
                    World's Largest Medical Equipment Market Place
                </p>
                <ul className='flex gap-2 text-sm sm:text-base flex-wrap justify-center sm:justify-end'>
                    <li className='hover:text-[#ED1C24] cursor-pointer'>
                        <a
                            href='https://1mdm.com/index.php?route=account/login'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            My account
                        </a>
                        <span className='mx-1 hidden sm:inline'>|</span>
                    </li>
                    <li className='hover:text-[#ED1C24] cursor-pointer'>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='px-4 sm:px-6 lg:px-28'>
                <hr className='border-t border-[#cecdcd]' />
            </div>
        </>
    );
};

export default Top_Section;
