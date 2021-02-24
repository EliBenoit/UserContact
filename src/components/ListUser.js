import React, {useState} from 'react';
import projectData from '../data/projectData';


const ListUser = () => {
    const [data, setData] = useState(projectData);
    const dataItems = data.map((item) => <li key={item.id}><img src={item.img} alt={item.name} className="ImgList"/>{item.name}</li>)

    return (
         <ul>{dataItems}</ul>
    );
};

export default ListUser;