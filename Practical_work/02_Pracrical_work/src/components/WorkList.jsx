import Work from "./Work";

export default function WorkList({ works }) {
    return (
        <ul class="work_list">
            {works.map(i => <Work {...i} />)}
        </ul>
    );
}
