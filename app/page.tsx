import CountryCard from '@/app/components/country-card/CountryCard';

export type Country = {
    name: {
        common: string;
    };
    flags: {
        svg: string;
        alt: string;
    };
    translations: {
        rus: {
            common: string;
            official: string;
        }
    };
    capital: string;
    region: string;
    subregion: string;
    population: number;
    languages: {
        [key: string]: string;
    };
    borders?: string[];
    cca3?: string;
}

async function getCountries(): Promise<Country[]> {
    const response = await fetch("https://restcountries.com/v3.1/all");

    return response.json();
}

export default async function Home() {
    try {
        const countries = await getCountries();

        return (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
                {countries && countries.map((country) => (
                    <CountryCard
                        key={country.name.common}
                        name={country.name.common}
                        rusName={country.translations.rus.common}
                        flag={country.flags.svg}
                        flagAlt={country.flags.alt}
                    />
                ))}
            </section>
        )
    } catch (error) {
        return <div>{error}</div>;
    }
}
