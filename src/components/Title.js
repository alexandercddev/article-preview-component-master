/** 
* @author: Alexander Chi
* @description:
* @date: 05/Septiembre/2021
**/ 

export const Title = (props) => {
    const{ children } = props
    return (
        <h3 className="title">
            {children}
        </h3>
    );
}

export default Title;