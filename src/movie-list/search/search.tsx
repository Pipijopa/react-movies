import Button from '../../components/button/button';
import './search.scss';

export const Search = () => {
    return (
        <form className="form">
            <input className="control" type="text" name="search" placeholder="Введите название фильма" />
            <Button title="Искать" secondary />
        </form>
    );
};

export default Search;
