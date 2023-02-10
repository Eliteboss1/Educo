import React from 'react'
import { Course, Lifetime, Support, Value } from '../utils'

const footerHero = () => {
    const items = [
        {
            title: "1000+ Courses",
            image: Course
        },
        {
            title: "Value for money",
            image: Value
        },
        {
            title: "Community Support",
            image: Support
        },
        {
            title: "Lifetime Access",
            image: Lifetime
        },

    ]
    return (
        <section className="bg-white h-20 w-screen -mt-14 font-VisbyRegular">
            {/* wrapper */}
            <div className="grid grid-cols-4 w-max justify-between gap-14 mt-14">
            {items.map((row) => (
                <div className="flex gap-4 items-center" key={row.title}>
                    <img src={row.image} alt="" />
                    <p>{row.title}</p>
                </div>
            ))}
            </div>
        </section>
    )
}

export default footerHero