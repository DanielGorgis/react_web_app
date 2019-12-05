import React from 'react';
import '../Gridview/Gridview';
import moment from 'moment'; 


var now = moment().format('dddd');

if(now === "Thursday"){
    now = "Det er Torsdag!";
}
else{
    now = "Det er desværre ikke torsdag endnu :(..."}


const view = (props) => {

    return ( 
        
        <div clasName="row">
          <div className="column">
          <h2>{now}</h2>
          <div>
            <p>Så blev det Torsdag og det betyder selvfølgelig at i ikke skal snydes for et torsdags tip!. I dag skal grave ned i jorden og ud til Kina. Her møder vi nogle pandaer der er på vej ind i sine panda-teenage år.  Smukke og fjollede dyr. Det er ikke ualmindeligt at en eller to falder ned fra træet og finder vej op igen. Husk at indstille video kvaliteten så i kan få de flotte farver med massere af pixels.
</p>
</div>
          </div>
          <div className="column">
            <h2>Column 2</h2>
            <p>Video..</p>
          </div>
        </div>
    );
};

export default view;