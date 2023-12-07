import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/reducers/contacts/filterSlice';
import { selectGetFilter } from 'redux/reducers/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectGetFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className="filterContainer">
      <label>
        <h2 className="filterTitle">Find contacts by name:</h2>
        <input
          type="text"
          name="filter"
          className="filterInput"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
