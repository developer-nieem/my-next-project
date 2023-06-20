import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <h2>sidebar</h2>
            {children}
        </div>
    );
};

export default DashboardLayout;