import React, {useState} from 'react';
import InfoGroup from '../components/InfoGroup';
import projectData from '../data/projectData';

const UserProfil = () => {

    const [data] = useState(projectData);

    return (
        <div className="Container">
            <div className="Title" style={{backgroundImage:`url(${data[0].background})`}}>
                <h1>Contact</h1>
                <div className="Profil">
                    <img className="ImgProfil" src={data[0].img} alt={data[0].name}/>
                    <p>{data[0].name}</p>
                </div>
            </div>
            <div className="Contact">
                <InfoGroup label='Téléphone' info={data[0].phone} />
                <InfoGroup label='Email' info={data[0].email} />
                <InfoGroup label='Adresse' info={data[0].adress} />
            </div>
        </div>
    );
};

export default UserProfil;