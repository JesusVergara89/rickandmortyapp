
const InputFind = ({setSearchLocation}) => {
    

const searchFunction = (e) => {
    e.preventDefault()
    setSearchLocation(e.target.children[1].value)
}

  return (
    <form onSubmit={searchFunction}>
        <h1>By Jesus Vergara</h1>
        <input type="text" placeholder="Number here (0-126)" />
        <button>Search</button>
    </form>
  )
}

export default InputFind