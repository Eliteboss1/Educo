import React from 'react'

const CalltoAction = () => {
    return (
        <section>
            <div className="flex items-center justify-center mt-32">
                {/* container for text, subtext and button */}
                <div className="flex flex-col items-center justify-center gap-8">
                    <p className="font-VisbyBold text-5xl leading-[58.9px] text-center">Get Access to high quality video,<br/> audio and live classes</p>
                    <p className="flex font-VisbyRegular text-xl text-center">We provide quality online courses with proper guidance. Our<br/> mentors are highly skilled and experienced in their fields</p>
                    <button className="bg-black text-white font-VisbyRegular text-2xl p-3 w-56 h-16 rounded-xl">Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default CalltoAction