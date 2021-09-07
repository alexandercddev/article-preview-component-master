/** 
 * @author: Alexander Chi
 * @description:
 * @date: 05/Septiembre/2021
**/ 
import React, { useState } from 'react';  
import './assets/scss/App.scss';
import {Card} from './components/Card';
import {Title} from './components/Title';
import {Text} from './components/Text';
import {Item} from './components/Item';
import {Image} from './components/Image';
import image from './assets/images/drawers.jpg';
import avatar from './assets/images/avatar-michelle.jpg';
import { ReactComponent as Share} from './assets/svgs/icon-share.svg'

const App = (props) => {
    const [active, setActive] = useState('')
    const handleShare = (event) => {
        setActive( active === 'active' ? '' : 'active')
    }
    const handleUrl = (event) => {
        const {id} = event.target;
        switch(id) {
            case 'facebook':
                window.open("https://www.facebook.com/AlexanderArturoChiDominguez");
            break;
            case 'twitter':
                window.open("https://twitter.com/alexandercddev");
            break;
            case 'pinterest':
                alert("No existe red social")
            break;
        }
    }

    return (
        <div className="container">
            <div className="card">
                {image && (
                    <Image 
                        name="Card Image"
                        image={image}/> 
                )} 
                <div className="content">
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
                    <Item image={avatar} active={active}>
                        <div className={`texts ${active}`}>
                            <div className="name">Michelle Appleton</div>
                            <span className="date">28 Jun 2020</span>
                        </div>
                        <button className={`btn btn-fab share ${active}`} onClick={handleShare}> 
                            <Share className={`share ${active}`} />
                        </button> 
                        <div className={`popover desktop__${active}`}>
                            <span className="text">Share</span>
                            <span id="facebook" className="facebook" onClick={handleUrl}></span>
                            <span id="twitter" className="twitter" onClick={handleUrl}></span>
                            <span id="pinterest" className="pinterest" onClick={handleUrl}></span>
                        </div>
                    </Item>  
                </div>
                <div className={`popover ${active}`}>
                    <span className="text">Share</span>
                    <span id="facebook" className="facebook" onClick={handleUrl}></span>
                    <span id="twitter" className="twitter" onClick={handleUrl}></span>
                    <span id="pinterest" className="pinterest" onClick={handleUrl}></span>
                </div>
            </div> 
        </div>
    );
}

export default App;