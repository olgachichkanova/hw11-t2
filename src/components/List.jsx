import Image from "./Image";

const List = ({data}) => {
    return (
        <div className="img__list">
            {data.map(i => <Image image={i}/>)}
        </div>
    )
}

export default List;