import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, changeFilterInput }) => (
  <FilterLabel>
    <FilterInput
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </FilterLabel>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
