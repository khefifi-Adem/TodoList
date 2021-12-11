import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../../services/Filters';
import { setFilter } from '../../services/action/actions';
import './FilterBar.css'

export const FilterBar = () => {
    const dispatch = useDispatch();

    return (
        <div >
            <ul className='button-container'>

                    {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                        const currentFilter = VISIBILITY_FILTER[filterkey];
                        return (
                            <button className='filter-button'
                                key={`visibility-filter-${currentFilter}`}
                                onClick={() => dispatch(setFilter(currentFilter))}
                            >
                                {currentFilter}

                            </button>
                        )
                    })}

            </ul>
        </div>
    )
}
