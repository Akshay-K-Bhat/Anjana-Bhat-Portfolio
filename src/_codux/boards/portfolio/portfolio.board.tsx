import { createBoard } from '@wixc3/react-board';
import { Portofolio } from '../../../components/portofolio/portofolio';

export default createBoard({
    name: 'Portfolio',
    Board: () => <Portofolio />
});
