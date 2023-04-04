const ContactButton = ({ text, link, ...props }) => {

    return (
        <a title={text} href={link} className={`group relative gsap-fadeUp from-indigo-500 to-indigo-50 bg-gradient-to-tr shadow-2xl shadow-slate-600 rounded-full flex flex-col sm:flex-row items-center justify-center p-3 m-2 cursor-pointer`}>
            <props.icon className='text-xl' />
        </a>
    )
}

export default ContactButton;