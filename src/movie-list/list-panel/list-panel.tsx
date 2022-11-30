import Button from '../../components/button/button';
import './list-panel.scss';

export const ListPanel = () => {
    return (
        <div className="panel">
            <span className="info">Найдено 7 элементов</span>
            <Button title="+ Добавить" />
        </div>
    );
};

export default ListPanel;
