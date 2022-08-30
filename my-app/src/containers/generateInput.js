import React from 'react'
import { connect } from 'react-redux'
import { generateInput } from '../actions'

const GenerateInput = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(generateInput(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Start Game
        </button>
      </form>
    </div>
  )
}

export default connect()(GenerateInput)
