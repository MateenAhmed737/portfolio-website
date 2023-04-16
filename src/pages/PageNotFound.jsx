const PageNotFound = () => {
    useEffect(() => {
        document.title = "Page not found";
    }, [])

    return (
        <div className='h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>Oops!</h1>
            <p className='text-2xl font-light'>Page Not Found.</p>
        </div>
    )
}

export default PageNotFound