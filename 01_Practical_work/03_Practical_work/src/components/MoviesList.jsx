import Film from "./Film";

export default function MoviesList({ movies }) {
    return (
        <ul class="movies_list">
            {movies.map(i => <Film {...i} />)}
        </ul>
    );
}
