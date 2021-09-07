/** 
* @author: Alexander Chi
* @description:
* @date: 05/Septiembre/2021
**/ 
import {Image} from './Image';

export const Item = (props) => {
    const { image, children, active } = props;
    return (
        <div className="item">
            <div className="item__image">
                {image && (
                    <Image  
                        name="Card Image"
                        image={image}
                        active={active}/> 
                )} 
            </div>
            <div className={`item__content ${active}`}>
                {children}
            </div>
        </div>
    );
}

export default Item;