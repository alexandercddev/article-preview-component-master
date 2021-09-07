/** 
* @author: Alexander Chi
* @description:
* @date: 05/Septiembre/2021
**/ 

export const Image = (props) => {
    const { image, name, active } = props
    return (
        <img className={`image ${active}`} src={image} alt={name} />
    );
}

export default Image;