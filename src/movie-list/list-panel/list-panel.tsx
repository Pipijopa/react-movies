import Button from '../../button/button';
import './list-panel.scss';

export const ListPanel = () => {
    return (
        <div className="panel">
            <div className="info">Найдено 7 элементов</div>
            <Button title="+ Добавить" />
        </div>
    );
};

export default ListPanel;
