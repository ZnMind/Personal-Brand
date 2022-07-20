import Head from 'next/head';

const Layout = ({
    children,
    title,
}) => {
    return (
        <>
            <Head>
                <title>{title} - Dan Mann</title>
            </Head>
                
            <div>
                <main>
                    {children} 
                </main>
            </div>
        </>
    )
}

export default Layout;