import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Input } from '../ContactForm/ContactForm.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <label>
        <p>Find contact by name</p>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
          required
        />
      </label>
    </div>
  );
}
