/** 
 * @author: Alexander Chi
 * @description:
 * @date: 05/Septiembre/2021
**/ 
import './assets/scss/App.scss';
import {Card} from './components/Card';
import {Title} from './components/Title';
import {Text} from './components/Text';
import {Item} from './components/Item';
import image from './assets/images/drawers.jpg';
import avatar from './assets/images/avatar-michelle.jpg';

const App = (props) => {
    return (
        <div className="container">
            <Card image={image}>
                <Title>
                    Shift the overall look and feel by 
                    adding these wonderful touches to 
                    furniture in your home
                </Title>
                <Text>
                    Ever been in a room and felt like something was missing? Perhaps 
                    it felt slightly bare and uninviting. I’ve got some simple tips 
                    to help you make any room feel complete. 
                </Text>
                <Item image={avatar} >
                    <div className="texts">
                        <div className="name">Michelle Appleton</div>
                        <span className="date">28 Jun 2020</span>
                    </div>
                    <button className="btn btn-fab share" />
                </Item>
            </Card>
        </div>
    );
}

export default App;