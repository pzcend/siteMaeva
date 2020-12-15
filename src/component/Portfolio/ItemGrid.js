import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {

    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }); 
        
    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }
    
    // this.iso.arrange({ filter: newFilter });
        
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return(
            <div>
            <ul className="list_style portfolio_menu text-center ">
                <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>Toutes</li>
                <li className={`${this.onActive('web')}`} data-wow-delay="0.3s" data-filter="web" onClick={() => {this.onFilterChange("web")}}><span ClassName="t_color">Motion Design</span></li>
                <li className={`${this.onActive(`develop`)}`} data-wow-delay="0.6s" data-filter="develop" onClick={()=> {this.onFilterChange("develop")}}>Animation</li>
                <li className={`${this.onActive(`market`)}`} data-wow-delay="0.8s" data-filter="market" onClick={()=> {this.onFilterChange("market")}}>Marketing</li>
            </ul>	

            <div className="grid row">
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item tech develop">
                    <div className="portfolio hover-style">
                        <img src={require('../../images/wave.jpg')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">MOTION DESIGN</h6>
                                <div className="icons">
                                    <a href=".#"><i className="icon_heart_alt"></i></a>
                                    <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>						
                    </div>
                </div>
             
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item market develop">
                    <div className="portfolio hover-style">
                    <img src={require('../../images/car.jpg')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">MOTION DESIGN</h6>
                                <div className="icons">
                                    <a href=".#"><i className="icon_heart_alt"></i></a>
                                    <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images/colour.jpg')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">MOTION DESIGN</h6>
                                <div className="icons">
                                    <a href=".#"><i className="icon_heart_alt"></i></a>
                                    <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
                
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                    <div className="portfolio hover-style">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zieBlWOsDug" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fPC69tnUH1o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images/gold.jpg')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">MOTION DESIGN</h6>
                                <div className="icons">
                                    <a href=".#"><i className="icon_heart_alt"></i></a>
                                    <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                
            </div>
            </div>
        )
    }
  }

  export default ItemGrid;
