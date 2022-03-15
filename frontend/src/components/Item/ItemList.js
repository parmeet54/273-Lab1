import { React, Component } from "react"
import Item from "./Item";

class ItemList extends Component {
    renderTile = (current_item) => {
        return <Item item={current_item}></Item>
    }

    render() {
        let tiles = [];
        for (let i = 0; i < this.props.items.length; i++) {
            const current_item = this.props.items[i];
            tiles.push(this.renderTile(current_item));
        }
        return tiles;    }
}

export default ItemList;