import React, { Component } from 'react'

export default class ErrorBoundary extends Component<
  Record<string, unknown>,
  { error: Error; hasError: boolean }
> {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: Boolean(error) }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    return this.state.hasError ? (
      <h1 title={this.state.error.message || String(this.state.error)}>Something went wrong.</h1>
    ) : (
      this.props.children
    )
  }
}
