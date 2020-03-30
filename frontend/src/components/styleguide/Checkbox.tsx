import React, { Component } from 'react'

interface CheckboxProps {
  className: string
  text: string
  onChange?: (value: boolean) => any
  disabledText?: string
  checked: boolean
}

export default class Checkbox extends Component<CheckboxProps> {
  state = {
    checked: this.props.checked,
  }
  handleInputChange = () => {
    this.setState(
      {
        checked: !this.state.checked,
      },
      () => {
        this.props.onChange && this.props.onChange(this.state.checked)
      }
    )
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="dib mr2 helvetica silver">
          {this.state.checked ? this.props.text : this.props.disabledText || this.props.text}
        </div>
        <div className="relative dib">
          <input
            className="absolute z-5 w-100 h-100 o-0 pointer"
            type="checkbox"
            checked={this.props.checked}
            onChange={this.handleInputChange}
          />
          <div
            className={`relative z-4 dib w3 h2 bg-mid-gray overflow-hidden br4 v-mid bg-animate ${
              this.state.checked ? 'bg-green' : ''
            }`}
          >
            <div
              className={`absolute right-auto left-0 w2 h2 br4 bg-silver shadow-4 t-cb bg-animate ${
                this.state.checked ? 'left-2 bg-moon-gray' : ''
              }`}
            />
          </div>
        </div>
      </div>
    )
  }
}
