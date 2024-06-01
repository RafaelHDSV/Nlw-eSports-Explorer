function ListItem(props) {
    return (
        <li>
            <a
                target="_blank"
                href={props.href}>
                <img src={props.src}
                    alt={props.alt} />
            </a>
        </li>
    )
}

export default ListItem;