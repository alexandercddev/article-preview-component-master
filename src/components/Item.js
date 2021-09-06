/** 
* @author: Alexander Chi
* @description:
* @date: 05/Septiembre/2021
**/ 
import {Image} from './Image';

export const Item = (props) => {
    const { image, children } = props;
    return (
        <div className="item">
            <div className="item__image">
                {image && (
                    <Image  
                        name="Card Image"
                        image={image}/> 
                )} 
            </div>
            <div className="item__content">
                {children}
            </div>
        </div>
    );
}

export default Item;