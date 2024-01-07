import Image from 'next/image';
import Link from 'next/link';

const CountryCard = ({ name, rusName, flag, flagAlt }: {
    name: string;
    rusName: string;
    flag: string;
    flagAlt: string;
}) => {
    return (
        <Link href={`/country/${name}`}>
            <article
                key={name}
                className="h-64 min-w-full p-2 bg-white border-2 e border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl"
            >
                <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
                    <Image
                        src={flag}
                        alt={flagAlt || "Флаг"}
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="font-bold text-xl text-center mt-1">
                    {rusName}
                </h1>
            </article>
        </Link>
    );
};

export default CountryCard;
