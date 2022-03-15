import { React, Component } from "react"
import Item from "./Item";
import {CCol, CRow,CContainer} from '@coreui/react'

class ItemList extends Component {
    renderTile = (current_item) => {

        return (

            <CCol>
                <Item item={current_item}/>
            </CCol>
            
            // <CContainer>
            // <CRow xs={{ cols: 4, gutter: 2 }}>
            //   <CCol sm="auto">One of three columns</CCol>
            //   <CCol sm="auto">One of three columns</CCol>
            //   <CCol sm="auto">One of three columns</CCol>
            // </CRow>
            // </CContainer>
            // <Item item={current_item}/>
        )
    }

    render() {
        let tiles = [];
        for (let i = 0; i < this.props.items.length; i++) {
            const current_item = this.props.items[i];
            tiles.push(this.renderTile(current_item));
        }
        return tiles;    }
}

ItemList.defaultProps = {
    items: []
  };

export default ItemList;