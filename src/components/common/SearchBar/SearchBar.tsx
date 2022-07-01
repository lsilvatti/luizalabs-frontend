import ic_busca from 'assets/svg/ic_busca.svg';
import ic_busca_menor from 'assets/svg/ic_busca_menor.svg';

import './SearchBar.scss';

interface SearchBarProps {
    variant: 'primary' | 'secondary'
    placeholder?: string
}

function SearchBar(props: SearchBarProps) {
    const { variant, placeholder } = props;

    return (
        <div className={`search-bar search-bar--${variant}`}>
            <img src={variant === 'primary' ? ic_busca : ic_busca_menor} alt=""></img>  
                <input placeholder={placeholder} type={"text"}>
            </input>
        </div>

    )
}

SearchBar.defaultProps = {
    variant: 'primary'
}

export default SearchBar;