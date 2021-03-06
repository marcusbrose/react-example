import React from 'react'

const propTypes = {
  addFish: React.PropTypes.func.isRequired,
}

class AddFishForm extends React.Component {
  
  constructor() {
    super()

    this.createFish = this.createFish.bind(this)
  }

  createFish(event) {
    event.preventDefault()

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value,
    }

    this.props.addFish(fish)
    this.fishForm.reset()
  }

  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={this.createFish}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea ref={(input) => this.description = input} type="text" placeholder="Fish Description"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFishForm.propTypes = propTypes

export default AddFishForm