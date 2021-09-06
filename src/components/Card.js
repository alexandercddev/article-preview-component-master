/** 
* @author: Alexander Chi
* @description:
* @date: 05/Septiembre/2021
**/ 
import {Image} from './Image';

export const Card = (props) => {
    const { image, children } = props;
    return (
        <div className="card">
            {image && (
                <Image 
                    name="Card Image"
                    image={image}/> 
            )} 
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Card;