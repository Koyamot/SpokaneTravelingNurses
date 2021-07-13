import React from 'react';
import { Header, Footer } from '../../common';
import { Typography, Image } from 'antd';
import Spokane from '../../../assets/clock-tower-and-pavilion.jpg'
import img from '../../../assets/Front.jpg'

const { Title, Paragraph } = Typography;

const Amenities = () => {
    return (
        <div className="Amenities">
            <div
                className="bg-container"
                style={{
                    backgroundImage: `url("${Spokane}")`,
                    backgroundPosition: '2% 40%',
                    height: '20rem',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Title>Welcome, Traveling Nurses!</Title>
            </div>
            <Header />
            <h1>These are the amenities</h1>
        </div>
    )
}


export default Amenities;