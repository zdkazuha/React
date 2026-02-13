import Work from "./Work";

export default function WorkList({ works }) {
    return (
        <>
            <h2>Collection ocf works</h2>
            <ul className="work_list">
                {works.map(i => <Work key={i.id} {...i} />)}
            </ul>
        </>
    );
}
