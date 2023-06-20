import Link from 'next/link';
import React from 'react';

const navlink =  [
    {
        path:'/',
        item: 'Home'
    },
    {
        path:'/about',
        item: 'About'
    },
    {
        path:'/contact',
        item: 'Contact'
    },
    {
        path:'/blog',
        item: 'blog'
    },
    {
        path:'/dashboard',
        item: 'Dashboard'
    }

]



const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1>My Next project</h1>
            <ul className='flex items-center justify-end gap-3'>
                {
                    navlink.map(({path , item}) => <li key={item}> 
                    
                    <Link href={path}>{item}</Link>
                     </li> )
                }
            </ul>
        </div>
    );
};

export default Navbar;