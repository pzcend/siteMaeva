import React, {Component} from 'react';
import ItemGrid from './ItemGrid';
import Sectiontitle from '../../component/Banner/Sectiontitle';


class portfolio extends Component {
    render() {
     
      return(
      <div className="section fp-section fp-tabble">
       
            <div className="container">
                <Sectiontitle Title="Mes Réalisations" TitleP="Texte de description sur les réalisations."/>
                <ItemGrid/>
            </div>
        </div>
      )
    }
  }

  export default portfolio;
