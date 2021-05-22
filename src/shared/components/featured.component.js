import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "../../redux/actions";
import Button from '@material-ui/core/Button';
function FeaturedComponent() {

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (<div>
        <Button onClick={(e) => {
            dispatch(increment())
        }}>+</Button>
        <span className='p-2 text-red'> {count}</span>
        <Button onClick={(e) => {
            dispatch(decrement())
        }}>-</Button>
    </div>);
}

export default FeaturedComponent;