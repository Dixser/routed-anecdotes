export const Anecdote = ({anecdote}) => (
    <div>
        <h2>{anecdote.content}</h2>
        <p>has {anecdote.votes} votes</p>
        <p>for more info see {anecdote.info}</p>
    </div>
)