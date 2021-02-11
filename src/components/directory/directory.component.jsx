import React from 'react';

import './directory.component.scss';
import MenuItem from '../menu-Item/menu-Item.component';

import { connect} from 'react-redux';

import {selectDirectorySections} from '../../redux/Directory/directory.selectors';

import {createStructuredSelector} from 'reselect';

const Directory = ({sections}) =>  

            (<div className="directory-menu">
               {
               sections.map(
                   ({ id, ...otherProps}) => (
                    <MenuItem key = {id} {...otherProps}/>
                    ))} 
                
            </div>
 );
 

const mapStateToProps = createStructuredSelector({
sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);