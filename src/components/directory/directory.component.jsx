import React from 'react';


import MenuItem from '../menu-Item/menu-Item.component';

import { connect} from 'react-redux';

import {selectDirectorySections} from '../../redux/Directory/directory.selectors';

import {createStructuredSelector} from 'reselect';

import {DirectoryMenuComponent} from './directory.styles';

const Directory = ({sections}) =>  

            (<DirectoryMenuComponent>
               {
               sections.map(
                   ({ id, ...otherProps}) => (
                    <MenuItem key = {id} {...otherProps}/>
                    ))} 
                
            </DirectoryMenuComponent>
 );
 

const mapStateToProps = createStructuredSelector({
sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);