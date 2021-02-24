import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import projectData from '../data/projectData';


const ListUser = () => {
    const [data] = useState(projectData);
    const dataItems = data.map((item) => (
        <NavLink exact to='/user'>
            <li key={item.id}>
                <img src={item.img} alt={item.name} className="ImgList"/>{item.name}
            </li>
        </NavLink>))

    return (
         <ul>{dataItems}</ul>
    );
};

export default ListUser;