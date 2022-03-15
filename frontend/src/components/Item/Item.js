import { React, Component } from "react"

class Item extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='Etsy_logo.png' alt="Placeholder image" width={50} height={25} ></img>
                    </figure>
                </div>
                <div class="card-content">
                    <p class="title product-title">{this.props.name}</p>

                    <div class="content">
                        {this.props.description}
                        <br></br>
                    </div>
                    <a class="button is-primary" href={"product.html" + this.props.item_ID}target="_blank">
                        <strong>More Details</strong>
                    </a>
                </div>
            </div>
        )
    }
}

export default Item;