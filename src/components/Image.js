/** 
* @author: Alexander Chi
* @description:
* @date: 05/Septiembre/2021
**/ 

export const Image = (props) => {
    const { image, name } = props
    return (
        <img className="image" src={image} alt={name} />
    );
}

export default Image;