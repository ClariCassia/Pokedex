import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Toggler = ({ checked, onChange }) => {

    return (

        <span className="theme__toggle-wrap">
            <input
                id="theme"
                className="theme__toggle"
                type="checkbox"
                role="switch"
                name="theme"
                checked={checked}
                onChange={onChange}
            />

            <span className="theme__fill"></span>

            <span className="theme__icon">
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
            </span>
            
        </span>
    );
};

Toggler.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Toggler;
