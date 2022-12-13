
interface CardProps {
    name: string;
    email: string;
}

function Card(props: CardProps): JSX.Element {

    return (
        <div className="bg-light-green dib br3 ma2 grow shadow-5">
            <img alt="robots" src={`https://robohash.org/${props.name}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
