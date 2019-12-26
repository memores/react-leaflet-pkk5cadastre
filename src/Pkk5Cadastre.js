import {pkk5Cadastre as LeafletPkk5Cadastre} from 'leaflet-pkk5cadastre';
import { GridLayer, withLeaflet } from 'react-leaflet';

class Pkk5Cadastre extends GridLayer {
  createLeafletElement(props)  {
    return new LeafletPkk5Cadastre(props.options)
  }

  updateLeafletElement(fromProps, toProps) {
    
  }
}

export default withLeaflet(Pkk5Cadastre)