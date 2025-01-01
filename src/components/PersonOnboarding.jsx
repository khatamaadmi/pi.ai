import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useName } from '../context/NameContext';

const TakeName = () => {
    const navigate = useNavigate();
    const { setName } = useName();
    const [isSending, setIsSending] = useState(false);
    const [inputName, setInputName] = useState("");

    const handleSubmit = () => {
        localStorage.setItem('name', inputName);
        if (!inputName.trim() || isSending) return;
        setIsSending(true);
        setName(inputName.trim());
        navigate('/talk');
    };

    return (
        <div className='w-full h-full bg-[#FAF3EA] flex justify-start items-center p-4 flex-col'>
            <header className='w-full mt-7 fixed px-5 top-0'>
                <div className='bg-[#F5EADC] text-[#0D3C26] h-10 w-10 rounded-full flex items-center justify-center cursor-pointer' onClick={()=> {navigate("/onboarding")}}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path fillRule="evenodd" clipRule="evenodd" d="M11.1408 17.6558C10.9157 17.8808 10.6106 18.0072 10.2924 18.0072C9.97418 18.0072 9.66902 17.8808 9.44398 17.6558L4.64398 12.8558C4.41902 12.6308 4.29264 12.3256 4.29264 12.0074C4.29264 11.6892 4.41902 11.3841 4.64398 11.159L9.44398 6.35902C9.55468 6.24441 9.68709 6.15299 9.8335 6.0901C9.9799 6.02721 10.1374 5.99411 10.2967 5.99272C10.456 5.99134 10.6141 6.0217 10.7615 6.08204C10.909 6.14237 11.043 6.23148 11.1557 6.34415C11.2683 6.45682 11.3574 6.5908 11.4178 6.73828C11.4781 6.88575 11.5085 7.04377 11.5071 7.2031C11.5057 7.36244 11.4726 7.5199 11.4097 7.66631C11.3468 7.81271 11.2554 7.94512 11.1408 8.05582L8.38918 10.8074L17.4924 10.8074C17.8106 10.8074 18.1159 10.9339 18.3409 11.1589C18.566 11.3839 18.6924 11.6892 18.6924 12.0074C18.6924 12.3257 18.566 12.6309 18.3409 12.8559C18.1159 13.081 17.8106 13.2074 17.4924 13.2074L8.38918 13.2074L11.1408 15.959C11.3657 16.1841 11.4921 16.4892 11.4921 16.8074C11.4921 17.1256 11.3657 17.4308 11.1408 17.6558Z" fill="currentColor"></path></svg>
                </div>
            </header>

            <div className='px-6 pt-22 flex flex-col justify-start items-start mt-16 text-[#0D3C26] font-semibold tracking-tighter'>
                <div className={'flex flex-col justify-center items-start mt-10 w-full'}>
                    <div className='flex w-full items-end'>
                        <p className='text-3xl'>Hello! I'm Pi.</p>
                        <img src="https://pi.ai/illustrations/high-five.svg" alt="welcome-clap" className='w-11 h-11'/>
                    </div>
                    <p className='text-3xl mb-3'>What's your name?</p>
                    <div className='flex flex-col justify-center items-start mt-2 text-[#6B6255] font-medium font-sans text- tracking-normal'>
                        <p>I take data privacy seriously. Our chats stay between us.</p>
                        <p>We never share your data for ads or marketing.</p>
                    </div>
                </div>

                <div className='mt-10 w-full'>
                    <div className="flex items-center md:w-[65vw] max-w-[800px] bg-white rounded-full shadow-lg overflow-hidden hover:border hover:border-[#c9b597] px-2">
                        <input
                            type="text"
                            placeholder="Your first name"
                            className="flex-grow px-5 font-normal py-3 text-[24px] h-auto text-black placeholder-[#c9b597] focus:outline-none placeholder:tracking-wide placeholder:text-[24px]"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                        />
                        <button
                            className={`flex items-center justify-center w-10 h-10 rounded-full
                              ${inputName.trim() && !isSending ? 'bg-green-600' : 'bg-[#FAF3EA]'} 
                              ${inputName.trim() && !isSending ? 'text-white' : 'text-[#6B6255]'}
                              hover:${inputName.trim() && !isSending ? 'bg-[#8d6d42]' : ''} 
                              disabled:opacity-50`}
                            aria-label="Send"
                            onClick={handleSubmit}
                            disabled={!inputName.trim() || isSending}
                        >
                            {isSending ? (
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12" height="16" fill="currentColor">
                                    <path fillRule="evenodd" d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeName;