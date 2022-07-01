import favorito_01 from 'assets/svg/favorito_01.svg';
import favorito_02 from 'assets/svg/favorito_02.svg';
import favorito_03 from 'assets/svg/favorito_03.svg';

import { useState } from 'react';

import './Favorite.scss';

interface FavoriteProps {

}

function Favorite(props: FavoriteProps) {
    const [hover, setHover] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const {  } = props;

    const handleMouseOver = () => {
        setHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
    }

    const handleClick = () => {
        setFavorite(!favorite);
    }

    return (
        <>
            {favorite ?
            <img onClick={handleClick} src={favorito_03}></img> :
            <img onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={hover ? favorito_01 : favorito_02}></img>
        }
        </>
    )
}

Favorite.defaultProps = {

}

export default Favorite;