"use client";

import Image from 'next/image';
import Link from 'next/link';

const Error = () => {
    return (
        <section className="flex flex-col container">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
                Упс, что-то пошло не так!
            </h1>
            <Link href="/" className="flex flex-row py-2 gap-1">
                <Image src="/arrow.svg" alt="Home" width={24} height={24}/>
                <h1>Назад</h1>
            </Link>
        </section>
    );
};

export default Error;
