import { useEffect, useState } from "react";

export default function UserCard() {

    const [user, setUser] = useState({});
    const [searchLogin, setSearchLogin] = useState("zdkazuha");

    const api = `https://api.github.com/users/${searchLogin}`;

    function handleChange(e) {
        setSearchLogin(e.target.value);
    }

    function load() {
        fetch(api)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user:', error));
    }

    function handleSubmit(e) {
        e.preventDefault();
        load();
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            <div className="userCard">

                <form className="userCardForm" onSubmit={handleSubmit}>
                    <label>Search login
                        <input type="text" value={searchLogin} onChange={handleChange} />
                    </label>
                </form>

                <hr />

                <div className="infoCard">
                    <div className="userCardLeft">
                        <img src={user.avatar_url ?? "/img/images.jpg"} alt="" />
                        <p>Name: {user.name ?? "Невідомо"}</p> <hr />
                        <p>Login: {user.login ?? "Невідомо"}</p> <hr />

                    </div>

                    <div className="userCardRight">
                        <p>Url to github: {user.url ?? "Немає"}</p> <hr />
                        <p>Blog: {user.blog ? user.blog : "Немає"}</p> <hr />
                        <p>City: {user.location ?? "Невідомо"}</p> <hr />
                        <p>Email: {user.email ?? "Невідомо"}</p> <hr />
                        <div className="userFollow">
                            <p>Followers: {user.followers ?? "0"}</p>
                            <p>Following: {user.following ?? "0"}</p>
                        </div> <hr />

                    </div>
                </div>
            </div>
        </>
    );
}
