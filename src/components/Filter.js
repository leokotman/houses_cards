function Filter(props) {
  return (
    <div className="filter">
        <span>Filter</span>
        <input type="text" className="filter__input" value={props.value} onChange={props.onChange} />
    </div>
  )
}

export default Filter;