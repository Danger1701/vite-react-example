const Button = (props) => {
    const name = props.name
    return (
        <>
            <button className="bg-primary px-5 py-2 text-white m-1">
                {name}
            </button><br/>
        </>
    )
}

export default Button;