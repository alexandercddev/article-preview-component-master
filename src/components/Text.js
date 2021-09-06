/** 
* @author: Alexander Chi
* @description:
* @date: 05/Septiembre/2021
**/ 

export const Text = (props) => {
    const { children } = props
    return (
        <p className="text">
            {children}
        </p>
    );
}

export default Text;