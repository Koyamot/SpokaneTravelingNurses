
import React from 'react';
import { Typography, Image } from 'antd';
import img from '../../../assets/Front.jpg';

const { Title, Paragraph } = Typography;

const Landing = () => {
    return (
        <div className="Landing">
            <div
                className="landing-container"
                style={{
                    backgroundColor: 'white',
                    minHeight: '100vh',
                    padding: '2.4rem 8rem 2.4rem 8rem',
                }}
            >
                <section
                    style={{
                        display: 'flex', 
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Title level={1}>Traveling Nurse Communal Living</Title>
                    <Image src={img} preview={false}/>
                    <Title level={4}>708 S. Thor St. Spokane, WA 99202</Title>
                    <Title level={3}>A home away from home</Title>
                    <Paragraph>
                        This is a paragraph about this location. It is a big house and it has a kitchen, 47 bedrooms, the patio is really nice, and there's a koi fish pond. You can bring your animal, if it pleases you. The owner may ask for a small deposit, and prefers that you crate them if you leave them alone in your room.
                    </Paragraph>
                    <Paragraph>
                        This is a paragraph about nearby things. It is a big house and it has a kitchen, 47 bedrooms, the patio is really nice, and there's a koi fish pond. You can bring your animal, if it pleases you. The owner may ask for a small deposit, and prefers that you crate them if you leave them alone in your room.
                    </Paragraph>
                </section>
            </div>
        </div>
    )
}


export default Landing;