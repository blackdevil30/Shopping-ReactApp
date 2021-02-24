import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect } from 'react-redux';

import {updateCollections} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
const CollectionpageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
 
 constructor(){
     super();
     this.state = {
         isLoading: true
     };
 }

unsubscribeFromSnapShot = null;

    componentDidMount(){

        const {updateCollections}= this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapShot => {
           const collectionMap = convertCollectionsSnapshotToMap(snapShot)
        //    console.log(collectionMap);
           updateCollections(collectionMap);
           this.setState({isLoading:false});
        }).catch(err=> {
            console.log(err);
        });

    }
    render(){
        const {match} = this.props;

      return( <div className="shop-page">
         <Route exact path={`${match.path}`} 
         render = { props => <CollectionOverViewWithSpinner isLoading={this.state.isLoading} {...props} />}/ >
          <Route path={`${match.path}/:collectionId`} render = { props => <CollectionpageWithSpinner isLoading={this.state.isLoading} {...props}/>}/>
      </div> );
    
    }
}



 const mapDispatchToProps = dispatch =>({
     updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
 });
    



export default connect(null, mapDispatchToProps)(ShopPage);