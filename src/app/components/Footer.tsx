import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="bg-midnightBlue text-center text-white text-xs p-3 mb-0 ">
                <div>accescollect ® 2024</div>
                <div className="flex justify-center">
                    <Link href="/cgu"><p>CGU - </p></Link>
                    <Link href="/mentions-legales"><p> Mentions Légales - </p></Link>
                    <Link href="/politique-confidentialite"><p> Politique de confidentialité</p></Link>
                </div>
            </footer>
        </>
    )
}

export default Footer