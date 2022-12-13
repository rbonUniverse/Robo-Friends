import notifyService from "../../../../Services/NotifyService";
import Loading from "../../../SharedArea/Loading/Loading";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function CardsList(): JSX.Element {

    const [users, getUsers] = useState<any[]>([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => res.json())
            .then(users => getUsers(users))
            .catch(err => notifyService.error(err));
    }, []);

    return (
        <div className="CardsList">
                <input
                    className="pa2 ba--green bg-lightest-blue f4"
                    type={"search"}
                    placeholder="Search Robots"
                    onChange={event => { setSearch(event.target.value) }}
                />
            <br />
            <br />
            {users.length === 0 && <Loading />}
            {users.filter((val) => {
                if (search == "") {
                    return val
                } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map(r => <Card key={r.id} name={r.name} email={r.email} />)}
        </div>
    );
}

export default CardsList;
