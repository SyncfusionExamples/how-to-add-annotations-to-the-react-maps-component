import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
import { Inject ,AnnotationsDirective, AnnotationDirective, Annotation} from '@syncfusion/ej2-react-maps';
import * as africaContinent from './africa-continent.json';

import './App.css';
  
function App() {
  return (
    <div className="App">
      <MapsComponent titleSettings={ { text:  'Africa' } }>
        <Inject services={[Annotation]}/>
        <AnnotationsDirective>
          <AnnotationDirective
          content='<div id="annotation"><p style="margin-left:10px;font-size:13px;font-weight:500">Facts about Africa</p><hr style="margin-top:-3px;margin-bottom:10px;border:0.5px solid #DDDDDD"><ul style="list-style-type:disc; margin-left:-20px;margin-bottom:2px; font-weight:400"><li>Africa is the second largest and second most populated continent in the world.</li> <li style="padding-top:5px;">Africa has 54 sovereign states and 10 non-sovereign territories.</li> <li style="padding-top:5px;">Algeria is the largest country in Africa, where as Mayotte is the smallest.</li></ul></div>'
          verticalAlignment='Far' x="15%" y="0%" />
          <AnnotationDirective content='<img src="https://ej2.syncfusion.com/react/demos/src/maps/images/compass.svg"  height="75px" width="75px"/>'
          x="85%" y="5%"/>
        </AnnotationsDirective>
        <LayersDirective>
          <LayerDirective shapeData={africaContinent}             
          shapeSettings={{
            fill: 'url(#grad1)' 
          }}>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
      <svg height="150" width="400">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C5494B', stopOpacity: '1' }} />
            <stop offset="100%" style={{ stopColor: '#4C134F', stopOpacity: '1' }} />
        </linearGradient>
      </defs>
      </svg>
    </div>
    
  );
}

export default App;
